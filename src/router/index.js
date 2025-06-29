// src/router/index.js or main.js
import { createRouter, createWebHistory } from 'vue-router'

// Dashboard views

import LoginView from '../views/dashboard/LoginView.vue'
import DashboardView from '../views/dashboard/DashboardView.vue'
import RegisterView from '../views/dashboard/RegisterView.vue'

// Template views
import ContactPage from '../views/template/contact.vue'
import HomePage from '../views/template/Home.vue'
import PresentationPage from '../views/template/presentation.vue'
import TransporteurPage from '../views/template/transporteur.vue'
import LoginRegisterPage from '../views/template/login_register.vue'



const routes = [
  { path: '/login', component: LoginView },
  { path: '/dashboard', component: DashboardView },
  { path: '/register', component: RegisterView },
  { path: '/', component: HomePage },
  { path: '/presentation', component: PresentationPage },
  { path: '/transporteur', component: TransporteurPage },
  { path: '/contact', component: ContactPage },
  { path: '/login_register', component: LoginRegisterPage }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
