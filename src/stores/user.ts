import { getCurrentUserVO } from '@/api/user'
import type { UserVO } from '@/types/api/vo'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const userVO = ref<UserVO>()

    async function initUserVO() {
      userVO.value = await getCurrentUserVO()
    }

    return {
      userVO,
      initUserVO
    }
  },
  {}
)
