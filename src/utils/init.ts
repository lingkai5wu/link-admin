import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { useMenuStore } from '@/stores/menu'
import { useUserStore } from '@/stores/user'
import { createDiscreteApi } from 'naive-ui'

export function initNaiveUIDiscreteApi() {
  const { message, dialog, notification, loadingBar } = createDiscreteApi([
    'message',
    'dialog',
    'notification',
    'loadingBar'
  ])
  window.$message = message
  window.$dialog = dialog
  window.$notification = notification
  window.$loadingBar = loadingBar
}

export async function initRuntimeData() {
  if (!useAuthStore().token) {
    const route = unref(router.currentRoute)
    if (route.name !== 'login') {
      await router.replace({ name: 'login' })
    }
    return
  }

  await useMenuStore().initMenuOptions()
  await useUserStore().initUserVO()
}
