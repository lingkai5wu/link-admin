import type { CategorySaveDTO, CategoryUpdateDTO } from '@/types/api/query'
import type { CategoryVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getMaterialCategoryVO(id: number): Promise<CategoryVO> {
  return await request.get(`/material-categories/${id}`)
}

export async function listMaterialCategoryVOs(): Promise<CategoryVO[]> {
  return await request.get('/material-categories')
}

export async function saveMaterialCategory(dto: CategorySaveDTO): Promise<null> {
  return await request.post('/material-categories', dto)
}

export async function updateMaterialCategory(dto: CategoryUpdateDTO): Promise<null> {
  return await request.put('/material-categories', dto)
}

export async function removeMaterialCategory(id: number): Promise<null> {
  return await request.delete(`/material-categories/${id}`)
}
