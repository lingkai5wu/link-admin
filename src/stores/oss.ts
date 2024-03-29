import { getOssDirectPostObjectInfoVO } from '@/api/oss'
import type { OssDirectPostObjectInfoVO } from '@/types/api/vo'
import { defineStore } from 'pinia'

export const useOssStore = defineStore(
  'oss',
  () => {
    const ossDirectPostObjectInfo = ref<OssDirectPostObjectInfoVO | null>(null)

    async function getValidOssDirectPostObjectInfo(minValidSeconds = 30) {
      if (
        !ossDirectPostObjectInfo.value ||
        ossDirectPostObjectInfo.value.expire - Date.now() < minValidSeconds * 1000
      ) {
        ossDirectPostObjectInfo.value = await getOssDirectPostObjectInfoVO()
      }
      return ossDirectPostObjectInfo.value
    }

    return { getValidOssDirectPostObjectInfo }
  },
  {}
)
