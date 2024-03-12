<script lang="ts" setup>
import { listMenuVOs, removeMenu } from '@/api/menu'
import MenuAdd from '@/components/curd/MenuAdd.vue'
import MenuEdit from '@/components/curd/MenuEdit.vue'
import type { DataTableActions } from '@/components/data-table/types'
import type { MenuTypeEnum } from '@/types/api/vo'
import type { MenuVOTree } from '@/types/menu'
import { generateMenuVOTrees } from '@/utils/menu'
import { type DataTableColumns, NTag } from 'naive-ui'
import { RouterLink } from 'vue-router'

type NTagType = 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'
const menuType2TagConfig: Record<MenuTypeEnum, { text: string; type: NTagType }> = {
  PARENT: {
    text: '父菜单',
    type: 'warning'
  },
  ROUTE: {
    text: '路由',
    type: 'primary'
  },
  LINK: {
    text: '链接',
    type: 'info'
  }
}
const columns: DataTableColumns<MenuVOTree> = [
  {
    title: '标签',
    key: 'label'
  },
  {
    title: '类型',
    key: 'type',
    render(row) {
      const element = menuType2TagConfig[row.type]
      return h(NTag, { type: element.type }, { default: () => element.text })
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
const actions: DataTableActions<MenuVOTree> = {
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
</script>

<template>
  <DataTable
    :actions="actions"
    :columns="columns"
    :func="async () => generateMenuVOTrees(await listMenuVOs())"
  />
</template>
