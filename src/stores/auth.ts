import { defineStore } from 'pinia'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const lastSentSmsCodeTimestamp = ref()
    return {
      lastSentSmsCodeTimestamp
    }
  },
  {
    persist: true
  }
)
