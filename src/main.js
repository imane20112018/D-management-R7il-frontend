import { createApp } from 'vue' // Import de Vue
import App from './App.vue' // Composant principal
import router from './router' // Routes
import { createPinia } from 'pinia' // Gestion d'état globale

// Créer une instance de l'application Vue
const app = createApp(App)

// Utiliser Pinia et le routeur
app.use(createPinia())
app.use(router)

// Monter l'application dans la page HTML
app.mount('#app')
