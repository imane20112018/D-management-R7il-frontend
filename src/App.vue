<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import MainLayout from './layout/template/MainLayout.vue'

export default {
  computed: {
    layout() {
      const noLayoutRoutes = [
         '/login',
        '/register',
        '/dashboard',
        '/login_register'
      ]
      return noLayoutRoutes.includes(this.$route.path) ? 'div' : MainLayout
    }
  },
  components: {
    MainLayout
  }
}
</script>
