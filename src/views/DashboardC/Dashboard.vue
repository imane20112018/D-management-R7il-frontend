<template>
  <AppHeader>
    <template #default>
      <!-- Ton contenu Home.vue ici -->
      <section class="p-4">
        <h2>Bienvenue</h2>
        <p>Contenu dynamique de la page d'accueil.</p>
      </section>
    </template>
  </AppHeader>
</template>

<script>
import AppHeader from '../../components/DashboardC/AppHeader.vue'
export default {
  name: 'DashboardClient',
  components: {
    AppHeader
  }
}
</script>
