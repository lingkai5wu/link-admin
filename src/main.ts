import { initNaiveUIDiscreteApi } from '@/utils/init'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
initNaiveUIDiscreteApi()
app.use(router)

app.mount('#app')
