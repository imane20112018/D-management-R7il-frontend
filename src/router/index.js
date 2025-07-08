import { createRouter, createWebHistory } from 'vue-router'


// Template views
import ContactPage from '@/views/template/contact.vue'
import HomePage from '@/views/template/Home.vue'
import PresentationPage from '@/views/template/presentation.vue'
import TransporteurPage from '@/views/template/transporteur.vue'
import LoginRegisterPage from '@/views/template/login_register.vue'

const routes = [
    // Public/template views
    { path: '/', component: HomePage },
    { path: '/presentation', component: PresentationPage },
    { path: '/transporteur', component: TransporteurPage },
    { path: '/contact', component: ContactPage },
    { path: '/login_register', component: LoginRegisterPage },

    // Dashboard layout with children routes
      {
  path: '/dashboard',
  component: () => import('@/layout/template/DashboardLayout.vue'), // 1️⃣ Layout principal
  children: [
    {
      path: '', // 2️⃣ Vue affichée par défaut dans le layout
      name: 'dashboard-home',
      component: () => import('@/views/DashboardC/Dashboard.vue')
    }
  ]
}


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
