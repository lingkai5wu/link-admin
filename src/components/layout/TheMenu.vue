<script lang="ts" setup>
import router from '@/router'
import { useMenuStore } from '@/stores/menu.js'
import type { MenuVOTree } from '@/types/tree'
import { OpenOutline } from '@vicons/ionicons5'
import type { MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
import type { VNodeChild } from 'vue'
import { RouterLink } from 'vue-router'

const route = router.currentRoute
const menuStore = useMenuStore()
const menuValue = computed(() => {
  const currentMenuVO = menuStore.menuVOs?.find((menuVO) => menuVO.path === route.value.path)
  if (currentMenuVO) {
    return currentMenuVO.id
  }
})

function renderMenuLabel(menuOption: MenuOption): VNodeChild {
  const menuVOTree = menuOption as unknown as MenuVOTree
  switch (menuVOTree.type) {
    case 'ROUTE':
      return h(RouterLink, { to: menuVOTree.path! }, () => menuVOTree.label)
    case 'LINK':
      return h('a', { href: menuVOTree.path, target: '_blank' }, menuVOTree.label)
    default:
      return menuVOTree.label
  }
}

function renderMenuExtra(menuOption: MenuOption): VNodeChild {
  const menuVOTree = menuOption as unknown as MenuVOTree
  if (menuVOTree.type === 'LINK') {
    return h(NIcon, null, { default: () => h(OpenOutline) })
  }
}
</script>

<template>
  <n-menu
    :options="menuStore.menuVOTrees"
    :render-extra="renderMenuExtra"
    :render-label="renderMenuLabel"
    :value="menuValue"
    accordion
    key-field="id"
  />
</template>
