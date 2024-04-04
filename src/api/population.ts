import type { PopulationSaveDTO, PopulationUpdateDTO } from '@/types/api/query'
import type { PopulationInfoVO, PopulationVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getPopulationVO(id: number): Promise<PopulationVO> {
  return await request.get(`/populations/${id}`)
}

export async function listPopulationInfoVOs(): Promise<PopulationInfoVO[]> {
  return await request.get('/populations')
}

export async function savePopulation(dto: PopulationSaveDTO): Promise<null> {
  return await request.post('/populations', dto)
}

export async function updatePopulation(dto: PopulationUpdateDTO): Promise<null> {
  return await request.put('/populations', dto)
}

export async function removePopulation(id: number): Promise<null> {
  return await request.delete(`/populations/${id}`)
}
