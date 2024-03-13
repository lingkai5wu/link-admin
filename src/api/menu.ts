import type { MenuSaveDTO, MenuUpdateDTO } from '@/types/api/query'
import type { MenuVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function listCurrentUserMenuVOs(): Promise<MenuVO[]> {
  return await request.get('/menus/current')
}

export async function getMenuVO(id: number): Promise<MenuVO> {
  return await request.get('/menus/' + id)
}

export async function listMenuVOs(): Promise<MenuVO[]> {
  return await request.get('/menus')
}

export async function saveMenu(saveDTO: MenuSaveDTO): Promise<null> {
  return await request.post('/menus', saveDTO)
}

export async function updateMenu(updateDTO: MenuUpdateDTO): Promise<null> {
  return await request.put('/menus', updateDTO)
}

export async function removeMenu(id: number): Promise<null> {
  return await request.delete('/menus/' + id)
}
