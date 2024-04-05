import type { RuntimeDataVO } from '@/types/api/vo'
import { compareSortableEntity } from '@/utils/compare'
import request from '@/utils/request'

export async function getRuntimeDataVO(): Promise<RuntimeDataVO> {
  const runtimeDataVO: RuntimeDataVO = await request.get('/aggregate/runtime-data')
  runtimeDataVO.menuVOs.sort(compareSortableEntity)
  return runtimeDataVO
}
