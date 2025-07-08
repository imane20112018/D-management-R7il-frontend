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
      const noLayoutRoutes = ['/login', '/register', '/login_register']
      const dashboardRoutes = ['/dashboard']

      if (noLayoutRoutes.includes(this.$route.path)) {
        return 'div'
      } else if (dashboardRoutes.includes(this.$route.path)) {
        return DashboardLayout
      } else {
        return MainLayout
      }
    }
  },
  components: {
    MainLayout,
    DashboardLayout
  }
}
</script>
