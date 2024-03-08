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

export function pick<T extends Data, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key]
    }
  })
  return result
}

export function getDifferences(source: Data, target: Data): Data | null {
  const result: Data = { id: target.id }
  let isDifferent = false

  for (const key in target) {
    if (source[key] !== target[key]) {
      result[key] = target[key]
      isDifferent = true
    }
  }

  return isDifferent ? result : null
}
