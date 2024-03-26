<script lang="ts" setup>
import { listMenuVOs, removeMenu } from '@/api/menu'
import MenuAdd from '@/components/curd/MenuAdd.vue'
import MenuEdit from '@/components/curd/MenuEdit.vue'
import MenuSort from '@/components/curd/MenuSort.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { MenuVOTree } from '@/types/menu'
import { enum2Tag, menuTypeEnumConfig } from '@/utils/enum'
import { generateMenuVOTrees } from '@/utils/menu'
import { type DataTableColumns } from 'naive-ui'
import { RouterLink } from 'vue-router'

const columns: DataTableColumns<MenuVOTree> = [
  {
    title: '标签',
    key: 'label'
  },
  {
    title: '类型',
    key: 'type',
    render(row) {
      return enum2Tag(menuTypeEnumConfig, row.type)
    }
  },
  {
    title: '路径',
    key: 'path',
    ellipsis: true,
    render(row) {
      switch (row.type) {
        case 'ROUTE':
          return h(RouterLink, { to: row.path! }, () => row.path)
        case 'LINK':
          return h('a', { href: row.path, target: '_blank' }, row.path!)
      }
    }
  }
]
const rowActions: RowActions<MenuVOTree> = {
  add: {
    title: '新增',
    type: 'primary',
    disabled(row) {
      return row.type !== 'PARENT'
    },
    component: MenuAdd
  },
  edit: {
    title: '修改',
    type: 'warning',
    component: MenuEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    disabled(row) {
      return row.children !== undefined
    },
    func: (row) => removeMenu(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    component: MenuAdd
  },
  sort: {
    title: '修改顺序',
    type: 'info',
    component: MenuSort
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="async () => generateMenuVOTrees(await listMenuVOs())"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
