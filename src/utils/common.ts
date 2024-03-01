import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { useMenuStore } from '@/stores/menu'
import { useUserStore } from '@/stores/user'

export const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay))

export async function initRuntimeData() {
  if (!useAuthStore().token) {
    const route = unref(router.currentRoute)
    if (route.name !== 'login') {
      await router.replace({ name: 'login' })
    }
    return
  }
  await Promise.all([useMenuStore().initMenuOptions(), useUserStore().initUserVO()])
}
