import type { PermissionSaveDTO, PermissionUpdateDTO } from '@/types/api/query'
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

export async function savePermission(dto: PermissionSaveDTO): Promise<null> {
  return await request.post('/permissions', dto)
}

export async function updatePermission(dto: PermissionUpdateDTO): Promise<null> {
  return await request.put('/permissions', dto)
}

export async function removePermission(id: number): Promise<null> {
  return await request.delete(`/permissions/${id}`)
}
