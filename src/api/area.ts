import type { AreaSaveDTO, AreaUpdateDTO } from '@/types/api/query'
import type { AreaVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getAreaVO(id: number): Promise<AreaVO> {
  return await request.get(`/areas/${id}`)
}

export async function listAreaVOs(): Promise<AreaVO[]> {
  return await request.get('/areas')
}

export async function saveArea(dto: AreaSaveDTO): Promise<null> {
  return await request.post('/areas', dto)
}

export async function updateArea(dto: AreaUpdateDTO): Promise<null> {
  return await request.put('/areas', dto)
}

export async function removeArea(id: number): Promise<null> {
  return await request.delete(`/areas/${id}`)
}
