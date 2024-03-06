<script lang="ts" setup>
import { listMenus } from '@/api/menu'
import type { MenuOptionWithEx } from '@/types/menu'
import { generateMenuOptions } from '@/utils/menu'
import type { DataTableColumns } from 'naive-ui'

const tableData = ref<MenuOptionWithRouteMeta[]>()
listMenus().then((data) => {
  tableData.value = generateMenuOptions(data)
})
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
    key: 'path'
  }
])
</script>

<template>
  <h1>菜单管理</h1>
  <n-data-table :columns="columns" :data="tableData" />
</template>

<style scoped></style>
