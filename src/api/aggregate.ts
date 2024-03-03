import type { RuntimeDataVO } from '@/types/api/vo'
import request from '@/utils/request'

export async function getRuntimeDataVO(): Promise<RuntimeDataVO> {
  return await request.get('/aggregate/runtime-data')
}
