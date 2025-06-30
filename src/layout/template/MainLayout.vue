<template>
  <div id="wrapper">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '../../components/template/Header.vue'
import AppFooter from '../../components/template/Footer.vue'


export default {
  name: 'MainLayout',
  components: {
    AppHeader,
    AppFooter
  },
  mounted() {
    // Si des scripts JS externes doivent être appelés
    setTimeout(() => {
      if (window?.init) {
        window.init(); // exemple : fonction JS définie dans functions.bundle.js
      }
    }, 100);
  }
}
</script>

