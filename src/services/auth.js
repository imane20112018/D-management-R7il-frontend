import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000', // ton backend Laravel
  withCredentials: true, // pour les cookies (Sanctum)
})

export const register = async (form) => {
  await api.get('/sanctum/csrf-cookie') // obligatoire avant login/register
  return api.post('/api/register', form)
}

export const login = async (form) => {
  await api.get('/sanctum/csrf-cookie')
  return api.post('/api/login', form)
}

export const logout = async () => {
  return api.post('/api/logout')
}
