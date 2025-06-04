<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-bold text-center mb-6 text-gray-800">Connexion</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block mb-1 text-sm text-gray-600">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div class="mb-6">
          <label class="block mb-1 text-sm text-gray-600">Mot de passe</label>
          <input
            v-model="form.password"
            type="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Se connecter
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async login() {
      try {
        await axios.get('/sanctum/csrf-cookie') // Important
        const response = await axios.post('/api/login', this.form)
        alert(response.data.success)
        console.log('User:', response.data.User)
        console.log('Token:', response.data.Token)
        // Redirect or store token
      } catch (error) {
        alert(error.response.data.message || 'Erreur de connexion')
      }
    },
  },
}
</script>
