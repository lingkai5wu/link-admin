import type { UserSaveDTO, UserUpdateDTO } from '@/types/api/query'
import type { UserVO } from '@/types/api/vo'
import request from '@/utils/request.js'

export async function getCurrentUserVO(): Promise<UserVO> {
  return await request.get('/users/current')
}

export async function getUserVO(id: number): Promise<UserVO> {
  return await request.get('/users/' + id)
}

export async function listUserVOs(): Promise<UserVO[]> {
  return await request.get('/users')
}

export async function saveUser(saveDTO: UserSaveDTO): Promise<null> {
  return await request.post('/users', saveDTO)
}

export async function updateUser(updateDTO: UserUpdateDTO): Promise<null> {
  return await request.put('/users', updateDTO)
}

export async function removeUser(id: number): Promise<null> {
  return await request.delete('/users/' + id)
}
