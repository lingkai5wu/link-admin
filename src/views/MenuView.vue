<script lang="ts" setup>
import { listMenus, removeMenu, saveMenu, updateMenu } from '@/api/menu'
import MenuAdd from '@/components/data-table/curd/MenuAdd.vue'
import MenuEdit from '@/components/data-table/curd/MenuEdit.vue'
import type { DataTableActions } from '@/components/data-table/types'
import type { MenuVOTree } from '@/types/menu'
import { generateMenuVOTrees } from '@/utils/menu'
import type { DataTableColumns } from 'naive-ui'

const columns: DataTableColumns<MenuVOTree> = [
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
  add: {
    title: '新增',
    type: 'primary',
    disabled(row: MenuVOTree) {
      return row.type !== 'PARENT'
    },
    component: MenuAdd,
    func: saveMenu
  },
  edit: {
    title: '修改',
    component: MenuEdit,
    func: updateMenu
  },
  delete: {
    title: '删除',
    type: 'error',
    disabled(row: MenuVOTree) {
      return row.children !== undefined
    },
    func: (row: MenuVOTree) => removeMenu(row.id)
  }
}
</script>

<template>
  <DataTable
    :actions="actions"
    :columns="columns"
    :func="async () => generateMenuVOTrees(await listMenus())"
  />
</template>
