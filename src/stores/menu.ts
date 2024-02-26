import { listCurrentUserMenus } from '@/api/menu'
import type { MenuOptionWithRouteMeta } from '@/types/menu'
import { generateMenuOptions } from '@/utils/menu'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore(
  'menu',
  () => {
    const menuOptions = ref<MenuOptionWithRouteMeta[]>()

    async function initMenuOptions() {
      const currentUserMenus = await listCurrentUserMenus()
      menuOptions.value = generateMenuOptions(currentUserMenus)
    }

    return {
      menuOptions,
      initMenuOptions
    }
  },
  {}
)
