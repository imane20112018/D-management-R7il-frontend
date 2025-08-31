import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

document.body.classList.add('loading')

const app = createApp(App)

// Register plugins
app.use(router)
app.use(createPinia())

// Mount only once, after router is ready
router.isReady().then(() => {
  app.mount('#app')
  document.getElementById('initial-loader').remove()
  document.body.classList.remove('loading')
})
