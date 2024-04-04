<script lang="ts" setup>
import { listAreaVOs, removeArea } from '@/api/area'
import AreaAdd from '@/components/curd/AreaAdd.vue'
import AreaEdit from '@/components/curd/AreaEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { AreaVO } from '@/types/api/vo'
import { type DataTableColumns } from 'naive-ui'

const columns: DataTableColumns<AreaVO> = [
  {
    title: '标签',
    key: 'label'
  },
  {
    title: '描述',
    key: 'description'
  }
]
const rowActions: RowActions<AreaVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'area:update',
    component: AreaEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'area:remove',
    needTwoStep: true,
    func: (row) => removeArea(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'area:save',
    component: AreaAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listAreaVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
