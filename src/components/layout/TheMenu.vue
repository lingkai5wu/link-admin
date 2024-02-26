<script lang="ts" setup>
import { useMenuStore } from '@/stores/menu.js'
import type { MenuOptionWithRouteMeta } from '@/types/menu'
import { OpenOutline } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import type { VNodeChild } from 'vue'
import { RouterLink } from 'vue-router'

const menuStore = useMenuStore()

function renderMenuLabel(menuOption: MenuOptionWithRouteMeta): VNodeChild {
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

function renderMenuExtra(menuOption: MenuOptionWithRouteMeta): VNodeChild {
  if (menuOption.type === 'LINK') {
    return h(NIcon, null, { default: () => h(OpenOutline) })
  }
}
</script>

<template>
  <n-menu
    :default-value="$route.name as string"
    :options="menuStore.menuOptions"
    :render-extra="renderMenuExtra"
    :render-label="renderMenuLabel"
    key-field="id"
  />
</template>
