import type { AnimalQuery, AnimalSaveDTO, AnimalUpdateDTO, PageDTO } from '@/types/api/query'
import type { AnimalBasicInfoVO, AnimalVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getAnimalVO(id: number): Promise<AnimalVO> {
  return await request.get(`/animals/${id}`)
}

export async function listAnimalBasicDataVOs(query?: AnimalQuery): Promise<AnimalBasicInfoVO[]> {
  return await request.get('/animals', { params: query })
}

export async function listAnimalBasicDataVOsWithPage(
  pageDTO?: PageDTO,
  query?: AnimalQuery
): Promise<AnimalBasicInfoVO[]> {
  return await request.get('/animals/page', { params: { ...pageDTO, ...query } })
}

export async function saveAnimal(dto: AnimalSaveDTO): Promise<null> {
  return await request.post('/animals', dto)
}

export async function updateAnimal(dto: AnimalUpdateDTO): Promise<null> {
  return await request.put('/animals', dto)
}

export async function removeAnimal(id: number): Promise<null> {
  return await request.delete(`/animals/${id}`)
}