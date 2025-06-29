<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h2 class="text-center mb-4">Créer un compte</h2>
        <div class="card p-4 shadow">
          <form @submit.prevent="handleRegister">
            <div class="mb-3">
              <label for="name" class="form-label">Nom complet</label>
              <input v-model="form.name" type="text" class="form-control" id="name" required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Adresse e-mail</label>
              <input v-model="form.email" type="email" class="form-control" id="email" required />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Mot de passe</label>
              <input
                v-model="form.password"
                type="password"
                class="form-control"
                id="password"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password_confirmation" class="form-label"
                >Confirmer le mot de passe</label
              >
              <input
                v-model="form.password_confirmation"
                type="password"
                class="form-control"
                id="password_confirmation"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary w-100">S'inscrire</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RegisterView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
    }
  },
  methods: {
    async handleRegister() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', this.form)
        alert(response.data.success)
        this.$router.push('/login')
      } catch (error) {
        console.error(error)
        alert("Erreur lors de l'inscription.")
      }
    },
  },
}
</script>

<style scoped>
.card {
  border-radius: 10px;
}
</style>
