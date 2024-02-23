import type { TokenInfoVO } from '@/types/vo'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const token = ref<TokenInfoVO | null>()
    const lastSentSmsCodeTimestamp = ref<number>()
    return {
      token,
      lastSentSmsCodeTimestamp
    }
  },
  {
    persist: true
  }
)
