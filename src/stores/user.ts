import type { UserVO } from '@/types/api/vo'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const userVO = ref<UserVO>()

    return {
      userVO
    }
  },
  {}
)
