import type { SpeciesSaveDTO, SpeciesUpdateDTO } from '@/types/api/query'
import type { SpeciesVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getSpeciesVO(id: number): Promise<SpeciesVO> {
  return await request.get(`/species/${id}`)
}

export async function listSpeciesVOs(): Promise<SpeciesVO[]> {
  return await request.get('/species')
}

export async function saveSpecies(dto: SpeciesSaveDTO): Promise<null> {
  return await request.post('/species', dto)
}

export async function updateSpecies(dto: SpeciesUpdateDTO): Promise<null> {
  return await request.put('/species', dto)
}

export async function removeSpecies(id: number): Promise<null> {
  return await request.delete(`/species/${id}`)
}
