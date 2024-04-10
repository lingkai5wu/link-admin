import type { CategorySaveDTO, CategoryUpdateDTO } from '@/types/api/query'
import type { CategoryVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getFinancialTransactionCategoryVO(id: number): Promise<CategoryVO> {
  return await request.get(`/financial-transaction-categories/${id}`)
}

export async function listFinancialTransactionCategoryVOs(): Promise<CategoryVO[]> {
  return await request.get('/financial-transaction-categories')
}

export async function saveFinancialTransactionCategory(dto: CategorySaveDTO): Promise<null> {
  return await request.post('/financial-transaction-categories', dto)
}

export async function updateFinancialTransactionCategory(dto: CategoryUpdateDTO): Promise<null> {
  return await request.put('/financial-transaction-categories', dto)
}

export async function removeFinancialTransactionCategory(id: number): Promise<null> {
  return await request.delete(`/financial-transaction-categories/${id}`)
}
