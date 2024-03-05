import { initRuntimeData } from '@/utils/common'
import { initNaiveUIDiscreteApi } from '@/utils/naive-ui'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

async function init() {
  const app = createApp(App)
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate)
  app.use(pinia)
  app.use(router)
  app.mount('#app')
  initNaiveUIDiscreteApi()
  await initRuntimeData()
}

init().then()
