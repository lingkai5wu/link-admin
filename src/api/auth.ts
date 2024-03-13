import type { AuthOtpLoginDTO } from '@/types/api/query'
import type { TokenInfoVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function sendOtp(): Promise<TokenInfoVO> {
  return await request.post('/auth/send-otp')
}

export async function otpLogin(dto: AuthOtpLoginDTO): Promise<TokenInfoVO> {
  return await request.post('/auth/otp-login', dto)
}

export async function logout(): Promise<null> {
  return await request.get('/auth/logout')
}
