import type { PermissionUpdateDTO } from '@/types/api/query'
import type { PermissionVO } from '@/types/api/vo'
import { comparePermissionVO } from '@/utils/compare'
import request from '@/utils/request'

export async function listCurrentUserPermissionVOs() {
  const permissionVOs: PermissionVO[] = await request.get('/permissions/current')
  permissionVOs.sort(comparePermissionVO)
  return permissionVOs
}

export async function getPermissionVO(id: number): Promise<PermissionVO> {
  return await request.get(`/permissions/${id}`)
}

export async function listPermissionVOs() {
  const permissionVOs: PermissionVO[] = await request.get('/permissions')
  permissionVOs.sort(comparePermissionVO)
  return permissionVOs
}

export async function syncPermission(): Promise<null> {
  return await request.post('/permissions/sync')
}

export async function updatePermission(dto: PermissionUpdateDTO): Promise<null> {
  return await request.put('/permissions', dto)
}
