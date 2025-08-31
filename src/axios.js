import axios from 'axios'

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    Accept: 'application/json'
  }
})

api.interceptors.request.use(config => {
  // On récupère les deux tokens
  const adminToken = localStorage.getItem('token')
  const transporteurToken = localStorage.getItem('transporteur_token')

  // Choisir le token selon le type d’URL
  if (config.url.startsWith('/admin')) {
    if (adminToken) {
      config.headers.Authorization = `Bearer ${adminToken}`
    }
  } else if (config.url.startsWith('/transporteur')) {
    if (transporteurToken) {
      config.headers.Authorization = `Bearer ${transporteurToken}`
    }
  } else {
    // fallback : si pas admin/transporteur, on met le token admin par défaut
    if (adminToken) {
      config.headers.Authorization = `Bearer ${adminToken}`
    }
  }

  return config
})

export default api
// import axios from 'axios'

// const api = axios.create({
//   baseURL: 'http://127.0.0.1:8000/api',
//   headers: {
//     Accept: 'application/json'
//   }
// })

// api.interceptors.request.use(config => {
//   const adminToken = localStorage.getItem('admin_token')
//   const transporteurToken = localStorage.getItem('transporteur_token')

//   // --- Routes Admin ---
//   if (config.url.startsWith('/admin')) {
//     if (adminToken) {
//       config.headers.Authorization = `Bearer ${adminToken}`
//     }
//   } 
//   // --- Routes Transporteur ---
//   else if (
//     config.url.startsWith('/transporteur') ||
//     config.url.startsWith('/demande-abonnement') ||
//     config.url.startsWith('/abonnement-statut')
//   ) {
//     if (transporteurToken) {
//       config.headers.Authorization = `Bearer ${transporteurToken}`
//     }
//   } 
//   // --- Fallback (par défaut : admin) ---
//   else {
//     if (adminToken) {
//       config.headers.Authorization = `Bearer ${adminToken}`
//     }
//   }

//   return config
// })

// export default api
