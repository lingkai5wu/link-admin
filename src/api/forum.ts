import type { EntityOrderUpdateDTO, ForumSaveDTO, ForumUpdateDTO } from '@/types/api/query'
import type { ForumBasicVO, ForumVO } from '@/types/api/vo'
import { compareSortableEntity } from '@/utils/compare'
import request from '@/utils/request'

export async function getForumVO(id: number): Promise<ForumVO> {
  return await request.get(`/forums/${id}`)
}

export async function listForumBasicVOs() {
  const forumVOs: ForumBasicVO[] = await request.get('/forums')
  forumVOs.sort(compareSortableEntity)
  return forumVOs
}

export async function saveForum(dto: ForumSaveDTO): Promise<null> {
  return await request.post('/forums', dto)
}

export async function updateForum(dto: ForumUpdateDTO): Promise<null> {
  return await request.put('/forums', dto)
}

export async function batchUpdateForumOrder(dtos: EntityOrderUpdateDTO[]): Promise<null> {
  return await request.post('/forums/batch-update-order', dtos)
}

export async function removeForum(id: number): Promise<null> {
  return await request.delete(`/forums/${id}`)
}
