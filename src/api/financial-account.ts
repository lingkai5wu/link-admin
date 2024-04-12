import type { FinancialAccountSaveDTO, FinancialAccountUpdateDTO } from '@/types/api/query'
import type { FinancialAccountBasicVO, FinancialAccountVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getFinancialAccountVO(id: number): Promise<FinancialAccountVO> {
  return await request.get(`/financial-accounts/${id}`)
}

export async function listFinancialAccountBasicVOs(): Promise<FinancialAccountBasicVO[]> {
  return await request.get('/financial-accounts')
}

export async function saveFinancialAccount(dto: FinancialAccountSaveDTO): Promise<null> {
  return await request.post('/financial-accounts', dto)
}

export async function updateFinancialAccount(dto: FinancialAccountUpdateDTO): Promise<null> {
  return await request.put('/financial-accounts', dto)
}

export async function removeFinancialAccount(id: number): Promise<null> {
  return await request.delete(`/financial-accounts/${id}`)
}
