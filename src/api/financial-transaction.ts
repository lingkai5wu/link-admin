import type { FinancialTransactionSaveDTO, FinancialTransactionUpdateDTO } from '@/types/api/query'
import type { FinancialTransactionBasicVO, FinancialTransactionVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getFinancialTransactionVO(id: number): Promise<FinancialTransactionVO> {
  return await request.get(`/financial-transactions/${id}`)
}

export async function listFinancialTransactionBasicVOs(): Promise<FinancialTransactionBasicVO[]> {
  return await request.get('/financial-transactions')
}

export async function saveFinancialTransaction(dto: FinancialTransactionSaveDTO): Promise<null> {
  return await request.post('/financial-transactions', dto)
}

export async function updateFinancialTransaction(
  dto: FinancialTransactionUpdateDTO
): Promise<null> {
  return await request.put('/financial-transactions', dto)
}

export async function removeFinancialTransaction(id: number): Promise<null> {
  return await request.delete(`/financial-transactions/${id}`)
}
