import type { MaterialStockSaveDTO, MaterialStockUpdateDTO } from '@/types/api/query'
import type { MaterialStockBasicVO, MaterialStockVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getMaterialStockVO(id: number): Promise<MaterialStockVO> {
  return await request.get(`/material-stocks/${id}`)
}

export async function listMaterialStockBasicVOs(): Promise<MaterialStockBasicVO[]> {
  return await request.get('/material-stocks')
}

export async function saveMaterialStock(dto: MaterialStockSaveDTO): Promise<null> {
  return await request.post('/material-stocks', dto)
}

export async function updateMaterialStock(dto: MaterialStockUpdateDTO): Promise<null> {
  return await request.put('/material-stocks', dto)
}

export async function removeMaterialStock(id: number): Promise<null> {
  return await request.delete(`/material-stocks/${id}`)
}
