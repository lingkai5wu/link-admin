import type { OssDirectPostObjectInfoVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getDirectPostObjectInfo(): Promise<OssDirectPostObjectInfoVO> {
  return await request.get('/oss/direct-post-object-info')
}
