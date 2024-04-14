import type { PageDTO, PostQuery, PostSaveDTO, PostUpdateDTO } from '@/types/api/query'
import type { PageVO, PostBasicVO, PostVO } from '@/types/api/vo'
import request from '@/utils/request.js'

export async function getPostVO(id: number): Promise<PostVO> {
  return await request.get(`/posts/${id}`)
}

export async function listCurrentPostBasicVOs(): Promise<PostBasicVO[]> {
  return await request.get('/posts/current')
}

export async function listPostBasicVOs(): Promise<PostBasicVO[]> {
  return await request.get('/posts')
}

export async function listPostVOsWithPage(
  query?: PostQuery,
  pageDTO?: PageDTO
): Promise<PageVO<PostVO>> {
  return await request.get('/posts/page', { params: { ...query, ...pageDTO } })
}

export async function savePost(dto: PostSaveDTO): Promise<null> {
  return await request.post('/posts', dto)
}

export async function updatePost(dto: PostUpdateDTO): Promise<null> {
  return await request.put('/posts', dto)
}

export async function removePost(id: number): Promise<null> {
  return await request.delete(`/posts/${id}`)
}
