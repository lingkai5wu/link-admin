import { getRuntimeDataVO } from '@/api/aggregate'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { useMenuStore } from '@/stores/menu'
import { useUserStore } from '@/stores/user'

export const sleep = (delay: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, delay))

export async function initRuntimeData() {
  if (!useAuthStore().token) {
    const route = unref(router.currentRoute)
    if (route.name !== 'login') {
      await router.replace({ name: 'login' })
    }
    return
  }
  const runtimeDataVO = await getRuntimeDataVO()
  useUserStore().userVO = runtimeDataVO.userVO
  useMenuStore().initMenu(runtimeDataVO.menuVOList)
}
