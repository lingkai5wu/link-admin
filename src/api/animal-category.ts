import type { CategorySaveDTO, CategoryUpdateDTO } from '@/types/api/query'
import type { CategoryVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getAnimalCategoryVO(id: number): Promise<CategoryVO> {
  return await request.get(`/animal-categories/${id}`)
}

export async function listAnimalCategoryVOs(): Promise<CategoryVO[]> {
  return await request.get('/animal-categories')
}

export async function saveAnimalCategory(dto: CategorySaveDTO): Promise<null> {
  return await request.post('/animal-categories', dto)
}

export async function updateAnimalCategory(dto: CategoryUpdateDTO): Promise<null> {
  return await request.put('/animal-categories', dto)
}

export async function removeAnimalCategory(id: number): Promise<null> {
  return await request.delete(`/animal-categories/${id}`)
}
