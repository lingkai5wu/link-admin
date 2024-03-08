<script lang="ts" setup>
import { listMenus } from '@/api/menu'
import MenuEdit from '@/components/data-table/menu/MenuEdit.vue'
import type { DataTableActions } from '@/components/data-table/types'
import type { MenuVO } from '@/types/api/vo'
import { sleep } from '@/utils/common'
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
  view: {
    title: '查看'
  },
  add: {
    title: '新增'
  },
  edit: {
    title: '修改',
    component: MenuEdit
  },
  delete: {
    title: '删除',
    func: async () => {
      await sleep(1000)
      window.$message.warning('模拟删除')
    }
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
