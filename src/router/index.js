import { createRouter, createWebHistory } from 'vue-router'

// Importer les pages Register et Login
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'

// Définir les routes accessibles dans l'app
const routes = [
  { path: '/', redirect: '/login' }, // Redirection par défaut
  { path: '/register', component: RegisterView }, // Page d'inscription
  { path: '/login', component: LoginView }, // Page de connexion
]

// Créer et exporter le routeur
const router = createRouter({
  history: createWebHistory(), // Utiliser le mode HTML5 (sans hash #)
  routes,
})

export default router
