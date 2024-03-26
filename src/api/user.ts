import type {
  BatchUpdateManyToManyDTO,
  UserQuery,
  UserSaveDTO,
  UserUpdateDTO
} from '@/types/api/query'
import type { PermissionVO, RoleVO, UserVO } from '@/types/api/vo'
import { comparePermissionVO } from '@/utils/compare'
import request from '@/utils/request.js'

export async function getCurrentUserVO(): Promise<UserVO> {
  return await request.get('/users/current')
}

export async function getUserVO(id: number): Promise<UserVO> {
  return await request.get(`/users/${id}`)
}

export async function listUserRoleVOs(id: number): Promise<RoleVO[]> {
  return await request.get(`/users/${id}/roles`)
}

export async function listUserPermissionVOs(id: number) {
  const permissionVOs: PermissionVO[] = await request.get(`/users/${id}/permissions`)
  permissionVOs.sort(comparePermissionVO)
  return permissionVOs
}

export async function listUserVOs(query?: UserQuery): Promise<UserVO[]> {
  return await request.get('/users', { params: query })
}

export async function saveUser(dto: UserSaveDTO): Promise<null> {
  return await request.post('/users', dto)
}

export async function updateUser(dto: UserUpdateDTO): Promise<null> {
  return await request.put('/users', dto)
}

export async function batchUpdateUserRole(
  id: number,
  dto: BatchUpdateManyToManyDTO<number>
): Promise<null> {
  return await request.put(`/users/${id}/roles`, dto)
}

export async function removeUser(id: number): Promise<null> {
  return await request.delete(`/users/${id}`)
}
