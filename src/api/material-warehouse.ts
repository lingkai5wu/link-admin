import type { MaterialWarehouseSaveDTO, MaterialWarehouseUpdateDTO } from '@/types/api/query'
import type { MaterialWarehouseBasicVO, MaterialWarehouseVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getMaterialWarehouseVO(id: number): Promise<MaterialWarehouseVO> {
  return await request.get(`/material-warehouses/${id}`)
}

export async function listMaterialWarehouseBasicVOs(): Promise<MaterialWarehouseBasicVO[]> {
  return await request.get('/material-warehouses')
}

export async function saveMaterialWarehouse(dto: MaterialWarehouseSaveDTO): Promise<null> {
  return await request.post('/material-warehouses', dto)
}

export async function updateMaterialWarehouse(dto: MaterialWarehouseUpdateDTO): Promise<null> {
  return await request.put('/material-warehouses', dto)
}

export async function removeMaterialWarehouse(id: number): Promise<null> {
  return await request.delete(`/material-warehouses/${id}`)
}
