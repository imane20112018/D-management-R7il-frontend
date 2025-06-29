<!-- src/views/LoginView.vue -->
<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <div class="card shadow p-4" style="min-width: 400px">
      <h3 class="text-center mb-4 text-primary">Connexion</h3>
      <form @submit.prevent="submit">
        <div class="mb-3">
          <label for="email" class="form-label">Adresse Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="form.email"
            placeholder="ex: imane@gmail.com"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="form.password"
            placeholder="******"
            required
          />
        </div>
        <div v-if="error" class="alert alert-danger py-1">
          {{ error }}
        </div>
        <button type="submit" class="btn btn-primary w-100">Se connecter</button>
      </form>
      <div class="text-center mt-3">
        <small>Pas de compte ? <RouterLink to="/register">Créer un compte</RouterLink></small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const form = ref({
  email: '',
  password: '',
})

const error = ref('')

const submit = async () => {
  error.value = ''
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login', {
      email: form.value.email,
      password: form.value.password,
    })

    // Stocker l'utilisateur ou token si tu veux
    localStorage.setItem('user', JSON.stringify(response.data.User))

    // Rediriger vers le tableau de bord
    router.push('/dashboard')
  } catch (err) {
    if (err.response && err.response.status === 401) {
      error.value = 'Email ou mot de passe incorrect'
    } else {
      error.value = 'Erreur lors de la connexion'
    }
  }
}
</script>
