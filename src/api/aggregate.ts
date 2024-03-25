import type { RuntimeDataVO } from '@/types/api/vo'
import { compare } from '@/utils/menu'
import request from '@/utils/request'

export async function getRuntimeDataVO(): Promise<RuntimeDataVO> {
  const runtimeDataVO: RuntimeDataVO = await request.get('/aggregate/runtime-data')
  runtimeDataVO.menuVOs.sort(compare)
  return runtimeDataVO
}
