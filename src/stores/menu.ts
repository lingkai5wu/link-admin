import { listCurrentUserMenus } from '@/api/menu'
import { generateMenuOptions } from '@/utils/menu'
import type { MenuOption } from 'naive-ui'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore(
  'menu',
  () => {
    const menuOptions = ref<MenuOption[]>()

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
