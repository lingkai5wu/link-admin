<script lang="ts" setup>
import { listMenus } from '@/api/menu'
import type { MenuOptionWithEx } from '@/types/menu'
import { generateMenuOptions } from '@/utils/menu'
import type { DataTableColumns } from 'naive-ui'

const columns = ref<DataTableColumns<MenuOptionWithEx>>([
  {
    title: '标签',
    key: 'label'
  },
  {
    title: '类型',
    key: 'type'
  },
  {
    title: '路径',
    key: 'path',
    ellipsis: true
  }
])
</script>

<template>
  <DataTable :columns="columns" :func="async () => generateMenuOptions(await listMenus())" />
</template>
