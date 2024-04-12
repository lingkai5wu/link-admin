import type { MaterialSaveDTO, MaterialUpdateDTO } from '@/types/api/query'
import type { MaterialBasicVO, MaterialVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getMaterialVO(id: number): Promise<MaterialVO> {
  return await request.get(`/materials/${id}`)
}

export async function listMaterialBasicVOs(): Promise<MaterialBasicVO[]> {
  return await request.get('/materials')
}

export async function saveMaterial(dto: MaterialSaveDTO): Promise<null> {
  return await request.post('/materials', dto)
}

export async function updateMaterial(dto: MaterialUpdateDTO): Promise<null> {
  return await request.put('/materials', dto)
}

export async function removeMaterial(id: number): Promise<null> {
  return await request.delete(`/materials/${id}`)
}
