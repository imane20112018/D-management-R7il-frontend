import { createRouter, createWebHistory } from 'vue-router'


// Template views
import ContactPage from '@/views/template/contact.vue'
import HomePage from '@/views/template/Home.vue'
import PresentationPage from '@/views/template/presentation.vue'
import TransporteurPage from '@/views/template/transporteur.vue'
import Dashboard from '@/views/DashboardC/Dashboard.vue'
import login_client from '@/views/DashboardC/Login.vue'

const routes = [
    // Public/template views
    { path: '/', component: HomePage },
    { path: '/presentation', component: PresentationPage },
    { path: '/transporteur', component: TransporteurPage },
    { path: '/contact', component: ContactPage },
    { path: '/dashboard_client', component: Dashboard },
    { path: '/login_client', component: login_client },




]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
