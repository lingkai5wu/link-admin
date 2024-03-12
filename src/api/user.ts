import type { UserSaveQuery, UserUpdateQuery } from '@/types/api/query'
import type { UserVO } from '@/types/api/vo'
import request from '@/utils/request.js'

export async function getCurrentUserVO(): Promise<UserVO> {
  return await request.get('/user/current')
}

export async function listUserVOs(): Promise<UserVO[]> {
  return await request.get('/user')
}

export async function saveUser(saveQuery: UserSaveQuery): Promise<null> {
  return await request.post('/user', saveQuery)
}

export async function updateUser(updateQuery: UserUpdateQuery): Promise<null> {
  return await request.patch('/user', updateQuery)
}

export async function removeUser(id: number): Promise<null> {
  return await request.delete('/user/' + id)
}
