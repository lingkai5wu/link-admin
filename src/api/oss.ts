import type { OssDirectPostObjectInfoVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function generateOssGetObjectUrl(objectName: string): Promise<string> {
  return await request.get('/oss/get-object-url', { params: { objectName } })
}

export async function getOssDirectPostObjectInfoVO(): Promise<OssDirectPostObjectInfoVO> {
  return await request.get('/oss/direct-post-object-info')
}
