import type { UserVO } from '@/types/api/vo'
import request from '@/utils/request.js'

export async function getCurrentUserVO(): Promise<UserVO> {
  return await request.get('/user/current')
}

export async function listUserVOs(): Promise<UserVO[]> {
  return await request.get('/user')
}
