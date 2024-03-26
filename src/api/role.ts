import type { BatchUpdateManyToManyDTO, RoleSaveDTO, RoleUpdateDTO } from '@/types/api/query'
import type { MenuVO, PermissionVO, RoleVO } from '@/types/api/vo'
import { compare } from '@/utils/menu'
import request from '@/utils/request'

export async function listCurrentUserRoleVOs(): Promise<RoleVO[]> {
  return await request.get('/roles/current')
}

export async function getRoleVO(id: number): Promise<RoleVO> {
  return await request.get(`/roles/${id}`)
}

export async function listRolePermissionVOs(id: number) {
  const permissionVOs: PermissionVO[] = await request.get(`/roles/${id}/permissions`)
  permissionVOs.sort((a, b) => a.code.localeCompare(b.code))
  return permissionVOs
}

export async function listRoleMenuVOs(id: number): Promise<MenuVO[]> {
  const menuVOs: MenuVO[] = await request.get(`/roles/${id}/menus`)
  menuVOs.sort(compare)
  return menuVOs
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

export async function batchUpdateRolePermission(
  id: number,
  dto: BatchUpdateManyToManyDTO<number>
): Promise<null> {
  return await request.put(`/roles/${id}/permissions`, dto)
}

export async function batchUpdateRoleMenu(
  id: number,
  dto: BatchUpdateManyToManyDTO<number>
): Promise<null> {
  return await request.put(`/roles/${id}/menus`, dto)
}

export async function removeRole(id: number): Promise<null> {
  return await request.delete(`/roles/${id}`)
}
