import { getRuntimeDataVO } from '@/api/aggregate'
import type { RowDataWithId } from '@/components/data-table/types'
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

export function getDiff<T extends Data>(oldData: T, data: T) {
  const result: Partial<T> = {}
  for (const key in data) {
    if (!Object.prototype.hasOwnProperty.call(oldData, key)) {
      result[key] = data[key]
      continue
    }
    if (JSON.stringify(oldData[key]) !== JSON.stringify(data[key])) {
      result[key] = data[key]
    }
  }
  return result
}

export function generateUpdateDTO<T extends Data>(oldData: T, data: T): RowDataWithId | undefined {
  if ('id' in oldData) {
    if (oldData.id !== data.id) {
      throw new Error('ID should not be changed.')
    }
    return {
      id: oldData.id as number,
      ...getDiff(oldData, data)
    }
  }
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
