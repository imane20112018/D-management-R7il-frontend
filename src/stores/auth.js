// Importer defineStore pour créer un "store" avec Pinia
import { defineStore } from 'pinia'
// Importer axios pour les appels HTTP vers Laravel
import axios from 'axios'

// Création du store "auth" (authentification)
export const useAuthStore = defineStore('auth', {
  // État initial (state) du store
  state: () => ({
    user: null, // Les données de l'utilisateur connecté
    token: localStorage.getItem('token') || null, // Token enregistré dans le navigateur
  }),
  // Actions = fonctions pour interagir avec l'API Laravel
  actions: {
    // Enregistrement d'un nv utilisateur
    async register(data) {
      const response = await axios.post('http://localhost:8000/api/register', data)
      alert(response.data.success) // Afficher un message de succès
    },

    //  Connexion de l'utilisateur
    async login(data) {
      const response = await axios.post('http://localhost:8000/api/login', data)
      this.user = response.data.User // Enregistrer les infos de l'utilisateur
      this.token = response.data.Token // Enregistrer le token
      localStorage.setItem('token', this.token) // Sauvegarder le token localement (dans le navigateur)
    },

    // 🚪 Déconnexion de l'utilisateur
    async logout() {
      await axios.post(
        'http://localhost:8000/api/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${this.token}`, // Ajouter le token pour autorisation
          },
        },
      )
      // Supprimer les infos utilisateur
      this.user = null
      this.token = null
      localStorage.removeItem('token') // Nettoyer le token du navigateur
    },
  },
})
