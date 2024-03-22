import type { PermissionUpdateDTO } from '@/types/api/query'
import type { PermissionVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function listCurrentUserPermissionVOs(): Promise<PermissionVO[]> {
  return await request.get('/permissions/current')
}

export async function getPermissionVO(id: number): Promise<PermissionVO> {
  return await request.get(`/permissions/${id}`)
}

export async function listPermissionVOs(): Promise<PermissionVO[]> {
  return await request.get('/permissions')
}

export async function syncPermission(): Promise<null> {
  return await request.post('/permissions/sync')
}

export async function updatePermission(dto: PermissionUpdateDTO): Promise<null> {
  return await request.put('/permissions', dto)
}
