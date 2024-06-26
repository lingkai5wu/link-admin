import type { PermissionVO } from '@/types/api/vo'

export function compareSortableEntity(a: SortableEntity, b: SortableEntity) {
  if (a.sortOrder !== null && b.sortOrder !== null) {
    return a.sortOrder - b.sortOrder
  }
  return a.id - b.id
}

export function comparePermissionVO(a: PermissionVO, b: PermissionVO) {
  return a.code.localeCompare(b.code)
}
