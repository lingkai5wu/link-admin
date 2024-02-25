import { useAuthStore } from '@/stores/auth.js'
import type { Router } from 'vue-router'

const ROUTE_NAME_WHITE_LIST = ['login']

export function createAuthGuard(router: Router) {
  router.beforeEach((to) => {
    const authStore = useAuthStore()
    if (authStore.token && to.name === 'login') {
      return '/'
    }

    if (ROUTE_NAME_WHITE_LIST.includes(<string>to.name)) {
      return true
    }
    if (!authStore.token) {
      return { name: 'login' }
    }
  })
}
