import { createAuthGuard } from '@/router/guards/auth'
import { createLoadingBarGuard } from '@/router/guards/loading-bar'
import { createPageTitleGuard } from '@/router/guards/title'
import routes from '@/router/routes'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

createAuthGuard(router)
createLoadingBarGuard(router)
createPageTitleGuard(router)

export default router
