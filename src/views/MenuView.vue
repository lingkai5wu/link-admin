<script lang="ts" setup>
import { listMenus, removeMenu, updateMenu } from '@/api/menu'
import MenuEdit from '@/components/data-table/curd/MenuEdit.vue'
import type { DataTableActions, RowDataWithId } from '@/components/data-table/types'
import type { MenuVO } from '@/types/api/vo'
import { generateMenuOptions } from '@/utils/menu'
import type { DataTableColumns } from 'naive-ui'

const columns: DataTableColumns<MenuVO> = [
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
]
const actions: DataTableActions = {
  edit: {
    title: '修改',
    component: MenuEdit,
    func: updateMenu
  },
  delete: {
    title: '删除',
    type: 'error',
    func: (row: RowDataWithId) => removeMenu(row.id)
  }
}
</script>

<template>
  <DataTable
    :actions="actions"
    :columns="columns"
    :func="async () => generateMenuOptions(await listMenus())"
  />
</template>
