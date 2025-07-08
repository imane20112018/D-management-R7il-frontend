<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import MainLayout from './layout/template/MainLayout.vue'
import DashboardLayout from '@/layout/template/DashboardLayout.vue'

export default {
  computed: {
    layout() {
      const mainLayoutRoutes = [
        '/',
        '/presentation',
        '/transporteur',
        '/contact',
        '/login_register'
      ]

      return mainLayoutRoutes.includes(this.$route.path)
        ? MainLayout
        : DashboardLayout
    }
  },
  components: {
    MainLayout,
    DashboardLayout
  }
}
</script>
