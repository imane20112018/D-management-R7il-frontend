<!-- src/views/DashboardView.vue -->
<template>
  <div class="container mt-5">
    <h2>Bienvenue dans votre espace, {{ user.email }}</h2>
    <button class="btn btn-outline-danger mt-3" @click="logout">Déconnexion</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref({})

onMounted(() => {
  const storedUser = JSON.parse(localStorage.getItem('user'))
  if (!storedUser) {
    router.push('/login')
  } else {
    user.value = storedUser
  }
})

const logout = () => {
  localStorage.removeItem('user')
  router.push('/login')
}
</script>
