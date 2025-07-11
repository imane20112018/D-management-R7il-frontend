import { createRouter, createWebHistory } from 'vue-router'

// Template views
import ContactPage from '@/views/template/contact.vue'
import HomePage from '@/views/template/Home.vue'
import PresentationPage from '@/views/template/presentation.vue'
import TransporteurPage from '@/views/template/transporteur.vue'
import Dashboard from '@/views/DashboardC/Dashboard.vue'
import login_client from '@/views/DashboardC/Login.vue'
import register_client from '@/views/DashboardC/Register.vue'
import ResetPassword from '@/views/DashboardC/ResetPassword.vue'
import LogoutPage from '@/views/DashboardC/Logout.vue'
import ForgotPassword from '@/views/DashboardC/ForgotPassword.vue'
const routes = [
  // Public/template views
  { path: '/', component: HomePage },
  { path: '/presentation', component: PresentationPage },
  { path: '/transporteur', component: TransporteurPage },
  { path: '/contact', component: ContactPage },
  { path: '/dashboard_client', component: Dashboard },
  { path: '/login_client', component: login_client },
  { path: '/register_client', component: register_client },
  { path: '/reset_password', component: ResetPassword },
  { path: '/logout', component: LogoutPage },
  { path: '/forgot_password', component: ForgotPassword },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
