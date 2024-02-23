import { useAuthStore } from '@/stores/auth.js'
import type { Router } from 'vue-router'

const PATH_WHITE_LIST = ['/login']

export function createAuthGuard(router: Router) {
  router.beforeEach((to) => {
    const authStore = useAuthStore()
    if (authStore.token && to.path === '/login') {
      return '/'
    }

    if (PATH_WHITE_LIST.includes(to.path)) {
      return true
    }
    if (!authStore.token) {
      return '/login'
    }
  })
}
