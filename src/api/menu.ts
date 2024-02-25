import type { MenuSaveQuery, MenuUpdateQuery } from '@/types/api/query'
import type { MenuVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function listCurrentUserMenus(): Promise<MenuVO[]> {
  return await request.get('/menu/current')
}

export async function listMenus(): Promise<MenuVO[]> {
  return await request.get('/menu')
}

export async function saveMenu(saveQuery: MenuSaveQuery): Promise<null> {
  return await request.post('/menu', saveQuery)
}

export async function updateMenu(updateQuery: MenuUpdateQuery): Promise<null> {
  return await request.patch('/menu', updateQuery)
}

export async function removeMenu(id: number): Promise<null> {
  return await request.delete('/menu/' + id)
}
