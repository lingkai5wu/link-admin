<script lang="ts" setup>
import router from '@/router'
import { useMenuStore } from '@/stores/menu.js'
import type { MenuVOTree } from '@/types/menu'
import { OpenOutline } from '@vicons/ionicons5'
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

function renderMenuLabel(menuOption: MenuVOTree): VNodeChild {
  switch (menuOption.type) {
    case 'ROUTE':
      return h(
        RouterLink,
        { to: menuOption.path as string },
        { default: () => menuOption.label || menuOption.meta?.title }
      )
    case 'LINK':
      return h('a', { href: menuOption.path, target: '_blank' }, menuOption.label as string)
    default:
      return menuOption.label as string
  }
}

function renderMenuExtra(menuOption: MenuVOTree): VNodeChild {
  if (menuOption.type === 'LINK') {
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
    key-field="id"
  />
</template>
