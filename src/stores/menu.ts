import type { MenuVO } from '@/types/api/vo'
import type { MenuVOTree } from '@/types/tree'
import { generateMenuVOTrees } from '@/utils/menu'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore(
  'menu',
  () => {
    const menuVOs = ref<MenuVO[]>()
    const menuVOTrees = ref<MenuVOTree[]>()

    function initMenu(menuVOList: MenuVO[]) {
      menuVOs.value = menuVOList
      menuVOTrees.value = generateMenuVOTrees(menuVOList)
    }

    return {
      menuVOs,
      menuVOTrees,
      initMenu
    }
  },
  {}
)
