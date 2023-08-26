import router from '@/router/index.ts'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const store = createPinia()
store.use(piniaPluginPersistedstate)
createApp(App).use(router).use(store).mount('#app')
