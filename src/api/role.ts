import type { RoleSaveDTO, RoleUpdateDTO } from '@/types/api/query'
import type { RoleVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function listCurrentUserRoleVOs(): Promise<RoleVO[]> {
  return await request.get('/roles/current')
}

export async function getRoleVO(id: number): Promise<RoleVO> {
  return await request.get(`/roles/${id}`)
}

export async function listRoleVOs(): Promise<RoleVO[]> {
  return await request.get('/roles')
}

export async function saveRole(dto: RoleSaveDTO): Promise<null> {
  return await request.post('/roles', dto)
}

export async function updateRole(dto: RoleUpdateDTO): Promise<null> {
  return await request.put('/roles', dto)
}

export async function removeRole(id: number): Promise<null> {
  return await request.delete(`/roles/${id}`)
}
