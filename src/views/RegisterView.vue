<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <!-- Champs pour le nom, l'email, le mot de passe et confirmation -->
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <input v-model="password_confirmation" type="password" placeholder="Confirm Password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
// Composition API: permet d'écrire du code plus clair
import { ref } from 'vue' // ref() permet de créer des variables réactives
import { useAuthStore } from '@/stores/auth' // Import du store auth

// Déclaration des champs de formulaire
const name = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')

// Utilisation du store Pinia
const auth = useAuthStore()

// Fonction appelée quand on clique sur "Register"
const handleRegister = () => {
  auth.register({
    name: name.value,
    email: email.value,
    password: password.value,
    password_confirmation: password_confirmation.value,
  })
}
</script>
