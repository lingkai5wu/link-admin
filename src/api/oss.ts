import type { OssGetObjectUrlGenerateDTO } from '@/types/api/query'
import type { OssDirectPostObjectInfoVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function generateOssGetObjectUrl(dto: OssGetObjectUrlGenerateDTO): Promise<string> {
  return await request.get('/oss/get-object-url', { params: dto })
}

export async function getOssDirectPostObjectInfoVO(): Promise<OssDirectPostObjectInfoVO> {
  return await request.get('/oss/direct-post-object-info')
}
