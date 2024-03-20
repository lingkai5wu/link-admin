import type { MenuQuery, MenuSaveDTO, MenuUpdateDTO } from '@/types/api/query'
import type { MenuVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function listCurrentUserMenuVOs(): Promise<MenuVO[]> {
  return await request.get('/menus/current')
}

export async function getMenuVO(id: number): Promise<MenuVO> {
  return await request.get(`/menus/${id}`)
}

export async function listMenuVOs(query: MenuQuery): Promise<MenuVO[]> {
  return await request.get('/menus', { params: query })
}

export async function saveMenu(dto: MenuSaveDTO): Promise<null> {
  return await request.post('/menus', dto)
}

export async function updateMenu(dto: MenuUpdateDTO): Promise<null> {
  return await request.put('/menus', dto)
}

export async function removeMenu(id: number): Promise<null> {
  return await request.delete(`/menus/${id}`)
}
