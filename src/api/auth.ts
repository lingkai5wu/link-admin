import type { AuthLoginQuery, TokenInfoVO } from '@/types/api'
import request from '@/utils/request'

export async function login(data: AuthLoginQuery): Promise<TokenInfoVO> {
  return await request.post('/auth/login', data)
}

export async function logout(): Promise<null> {
  return await request.get('/auth/logout')
}
