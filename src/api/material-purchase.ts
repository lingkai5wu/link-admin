import type { MaterialPurchaseSaveDTO, MaterialPurchaseUpdateDTO } from '@/types/api/query'
import type { MaterialPurchaseBasicVO, MaterialPurchaseVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getMaterialPurchaseVO(id: number): Promise<MaterialPurchaseVO> {
  return await request.get(`/material-purchases/${id}`)
}

export async function listMaterialPurchaseBasicVOs(): Promise<MaterialPurchaseBasicVO[]> {
  return await request.get('/material-purchases')
}

export async function saveMaterialPurchase(dto: MaterialPurchaseSaveDTO): Promise<null> {
  return await request.post('/material-purchases', dto)
}

export async function updateMaterialPurchase(dto: MaterialPurchaseUpdateDTO): Promise<null> {
  return await request.put('/material-purchases', dto)
}

export async function removeMaterialPurchase(id: number): Promise<null> {
  return await request.delete(`/material-purchases/${id}`)
}
