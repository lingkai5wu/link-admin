import type { MaterialMovementSaveDTO, MaterialMovementUpdateDTO } from '@/types/api/query'
import type { MaterialMovementBasicVO, MaterialMovementVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getMaterialMovementVO(id: number): Promise<MaterialMovementVO> {
  return await request.get(`/material-movements/${id}`)
}

export async function listMaterialMovementBasicVOs(): Promise<MaterialMovementBasicVO[]> {
  return await request.get('/material-movements')
}

export async function saveMaterialMovement(dto: MaterialMovementSaveDTO): Promise<null> {
  return await request.post('/material-movements', dto)
}

export async function updateMaterialMovement(dto: MaterialMovementUpdateDTO): Promise<null> {
  return await request.put('/material-movements', dto)
}

export async function removeMaterialMovement(id: number): Promise<null> {
  return await request.delete(`/material-movements/${id}`)
}
