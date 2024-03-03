import type { MenuVO } from '@/types/api/vo'
import type { MenuOptionWithRouteMeta } from '@/types/menu'
import { generateMenuOptions } from '@/utils/menu'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore(
  'menu',
  () => {
    const menuVOs = ref<MenuVO[]>()
    const menuOptions = ref<MenuOptionWithRouteMeta[]>()

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
