import type { EntityOrderUpdateDTO, MenuQuery, MenuSaveDTO, MenuUpdateDTO } from '@/types/api/query'
import type { MenuVO } from '@/types/api/vo'
import { compareSortableEntity } from '@/utils/compare'
import request from '@/utils/request'

export async function listCurrentUserMenuVOs(): Promise<MenuVO[]> {
  const menuVOs: MenuVO[] = await request.get('/menus/current')
  menuVOs.sort(compareSortableEntity)
  return menuVOs
}

export async function getMenuVO(id: number): Promise<MenuVO> {
  return await request.get(`/menus/${id}`)
}

export async function listMenuVOs(query?: MenuQuery): Promise<MenuVO[]> {
  const menuVOs: MenuVO[] = await request.get('/menus', { params: query })
  menuVOs.sort(compareSortableEntity)
  return menuVOs
}

export async function saveMenu(dto: MenuSaveDTO): Promise<null> {
  return await request.post('/menus', dto)
}

export async function updateMenu(dto: MenuUpdateDTO): Promise<null> {
  return await request.put('/menus', dto)
}

export async function batchUpdateMenuOrder(dtos: EntityOrderUpdateDTO[]): Promise<null> {
  return await request.post('/menus/batch-update-order', dtos)
}

export async function removeMenu(id: number): Promise<null> {
  return await request.delete(`/menus/${id}`)
}
