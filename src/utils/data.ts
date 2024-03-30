import { getRuntimeDataVO } from '@/api/aggregate'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { useMenuStore } from '@/stores/menu'
import { usePermissionStore } from '@/stores/permission'
import { useUserStore } from '@/stores/user'
import type { BatchUpdateManyToManyDTO } from '@/types/api/query'

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
  useMenuStore().initMenu(runtimeDataVO.menuVOs)
  usePermissionStore().permissionCodes = runtimeDataVO.permissionCodes
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

export function generateBatchUpdateManyToManyDTO<T>(oldValue: T[], value: T[]) {
  const originSet = new Set(oldValue)
  const valueSet = new Set(value)
  const targetIdsToInsert = value.filter((id) => !originSet.has(id))
  const targetIdsToDelete = oldValue.filter((id) => !valueSet.has(id))
  const dto: BatchUpdateManyToManyDTO<T> = {
    ...(targetIdsToInsert.length > 0 && { targetIdsToInsert }),
    ...(targetIdsToDelete.length > 0 && { targetIdsToDelete })
  }
  return dto
}
