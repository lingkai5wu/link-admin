import { initNaiveUIDiscreteApi, initRuntimeData } from '@/utils/init'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
initNaiveUIDiscreteApi()
await initRuntimeData()
app.use(router)

app.mount('#app')
