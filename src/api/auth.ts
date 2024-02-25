import type { AuthLoginQuery } from '@/types/api/query'
import type { TokenInfoVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function login(loginQuery: AuthLoginQuery): Promise<TokenInfoVO> {
  return await request.post('/auth/login', loginQuery)
}

export async function logout(): Promise<null> {
  return await request.get('/auth/logout')
}
