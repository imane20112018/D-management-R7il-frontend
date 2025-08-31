import { createRouter, createWebHistory } from 'vue-router'

// Template views
import ContactPage from '@/views/template/contact.vue'
import HomePage from '@/views/template/Home.vue'
import PresentationPage from '@/views/template/presentation.vue'
import ServicePage from '@/views/template/service.vue'

// Dashboard client views

import Dashboard from '@/views/DashboardC/Dashboard.vue'
import login_client from '@/views/DashboardC/Login.vue'
import register_client from '@/views/DashboardC/Register.vue'
import ResetPassword from '@/views/DashboardC/ResetPassword.vue'
import ForgotPassword from '@/views/DashboardC/ForgotPassword.vue'
import client from '@/views/DashboardC/Profile.vue'
import EditReservation from '@/views/DashboardC/EditReservation.vue'
import Reservations from '@/views/DashboardC/Reservations.vue'
import Notifications from '@/views/DashboardC/Notifications.vue'
import NotificationEditStatus from '@/views/DashboardC/NotificationEditStatus.vue'
import Suivireservations from '@/views/DashboardC/Suivireservations.vue'

//admin views
import AppHeader from '@/components/admin/AppHeader.vue'
import AdminDashboard from '@/views/admin/DashboardAdmin.vue'
import AdminLogin from '@/views/admin/Login.vue'
import ListeClient from '@/views/admin/client/ListeClient.vue'
import ClientDetails from '@/views/admin/client/DetailsClient.vue'
import TransporteursIncomplets from '@/views/admin/transporteur/TransporteursIncomplets.vue'
import TransporteursValides from '@/views/admin/transporteur/TransporteursValides.vue'
import TransporteursEnAttente from '@/views/admin/transporteur/TransporteursEnAttente.vue'
import TransporteurDetails from '@/views/admin/transporteur/TransporteurDetails.vue'
import TransporteursRefuses from '@/views/admin/transporteur/TransporteursRefuses.vue'
import AdminAbonnementsDemandes from '@/views/admin/AdminAbonnementsDemandes.vue' 
import AdminAbonnementsValides from '@/views/admin/AdminAbonnementsValides.vue'
import AdminAbonnementsRefuses from '@/views/admin/AdminAbonnementsRefuses.vue'
const routes = [
  // Public/template views
  { path: '/', component: HomePage },
  { path: '/presentation', component: PresentationPage },
  { path: '/service', component: ServicePage },
  { path: '/contact', component: ContactPage },

  // Dashboard client/template views

  { path: '/dashboard_client', component: Dashboard },
  { path: '/login_client', component: login_client },
  { path: '/register_client', component: register_client },
  { path: '/reset_password', component: ResetPassword },
  { path: '/forgot_password_client', component: ForgotPassword },
  {
    path: '/edit_client',
    component: client,
    meta: {
      requiresAuth: true,
    },
  },
 {
  path: '/edit_reservation/:id',
  name: 'EditReservation',
  component: EditReservation,
  meta : {
    requiresAuth: true,}
},
{
  path: '/historique-reservations',
  name: 'Suivireservations',
  component: Suivireservations,
  meta : {
    requiresAuth: true,}
},
{
  path: '/edit_reservation_client/:id',
  name: 'NotificationEditStatus',
  component: NotificationEditStatus,
  meta : {
    requiresAuth: true,}
},
{
  path: '/notifications',
  name: 'Notifications',
  component: Notifications,
  meta : {
    requiresAuth: true,}
},

{
  path: '/reservations',
  component: Reservations,
  meta: {
    requiresAuth: true,
  },
},


  {
    path: '/google-login-success',
    name: 'GoogleLoginSuccess',
    component: () => import('@/views/GoogleLoginSuccess.vue'),
  },
  //Admin routes
 {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin,
  },
  {
    path: '/admin',
    component: AppHeader, // ✅ Layout parent
    meta: { requiresAuth: true, requiresAdmin: true },
    children: [
      {
        path: 'dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard,
      },
      {
        path: 'liste-clients',
        name: 'ListeClient',
        component: ListeClient,
      },
      {
        path: 'clients/:id',
        name: 'ClientDetails',
        component: ClientDetails,
      },
      {
        path: 'transporteurs-incomplets',
        name: 'TransporteursIncomplets',
        component: TransporteursIncomplets,
      },
      {
        path: 'transporteurs-valides',
        name: 'TransporteursValides',
        component: TransporteursValides,
      },
      {
        path: 'transporteurs-en-attente',
        name: 'TransporteursEnAttente',
        component: TransporteursEnAttente,
      },
      {
        path: 'transporteurs/:id',
        name: 'TransporteurDetails',
        component: TransporteurDetails,
      },
      {
        path: 'transporteurs-refuses',
        name: 'TransporteursRefuses',
        component: TransporteursRefuses,
      },
      {
        path: 'abonnements-demandes',
        name: 'AdminAbonnementsDemandes',
        component: AdminAbonnementsDemandes,
      },
      {
        path: 'abonnements-valides',
        name: 'AdminAbonnementsValides',
        component: AdminAbonnementsValides,
      },
      
    ],
}

]
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// ✅ Global route guard
router.beforeEach(async (to, from, next) => {
  const isAdminRoute = to.path.startsWith('/admin')
  const token = localStorage.getItem('token')
  const transporteurToken = localStorage.getItem('transporteur_token')
  const user = JSON.parse(localStorage.getItem('user'))

  // 🔐 Route protégée
  if (to.meta.requiresAuth) {
    // 🔐 Route Admin
    if (to.meta.requiresAdmin) {
      if (!token || !user || user.role !== 'admin') {
        return next('/admin/login')
      }
      return next()
    }

    // 👤 Route Client
    if (!transporteurToken) {
      return next('/login_client')
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/transporteur/profil_client', {
        headers: {
          Authorization: `Bearer ${transporteurToken}`,
        },
      })
      if (!response.ok) throw new Error('Non autorisé')
      return next()
    } catch (error) {
      localStorage.removeItem('transporteur_token')
      return next('/login_client')
    }
  }

  // ✅ Pas de meta.requiresAuth → accessible à tous
  next()
})

export default router
