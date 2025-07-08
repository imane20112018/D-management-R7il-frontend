import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// Import CSS global
// import './assets/template/css/global.css'
// import './assets/argon/css/argon-dashboard.css'
// import './assets/argon/css/argon-dashboard.css.map'
// import './assets/argon/css/argon-dashboard.min.css'
// import './assets/argon/css/nucleo-icons.css'
// import './assets/argon/css/nucleo-svg.css'

// Créer une instance de l'application Vue
const app = createApp(App)

// Utiliser Pinia et le routeur
app.use(createPinia())
createApp(App).use(router).mount('#app')
