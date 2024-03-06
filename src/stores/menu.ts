import type { MenuVO } from '@/types/api/vo'
import type { MenuOptionWithEx } from '@/types/menu'
import { generateMenuOptions } from '@/utils/menu'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore(
  'menu',
  () => {
    const menuVOs = ref<MenuVO[]>()
    const menuOptions = ref<MenuOptionWithEx[]>()

    function initMenu(menuVOList: MenuVO[]) {
      menuVOs.value = menuVOList
      menuOptions.value = generateMenuOptions(menuVOList)
    }

    return {
      menuVOs,
      menuOptions,
      initMenu
    }
  },
  {}
)
