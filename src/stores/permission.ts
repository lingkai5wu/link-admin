import { defineStore } from 'pinia'

export const usePermissionStore = defineStore(
  'permission',
  () => {
    const permissionCodes = ref<string[]>()

    return {
      permissionCodes
    }
  },
  {}
)
