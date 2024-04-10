<script lang="ts" setup>
import { listMaterialCategoryVOs, removeMaterialCategory } from '@/api/material-category'
import MaterialCategoryAdd from '@/components/curd/MaterialCategoryAdd.vue'
import MaterialCategoryEdit from '@/components/curd/MaterialCategoryEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { CategoryVO } from '@/types/api/vo'
import { type DataTableColumns } from 'naive-ui'

const columns: DataTableColumns<CategoryVO> = [
  {
    title: '标签',
    key: 'label'
  },
  {
    title: '描述',
    key: 'description'
  }
]
const rowActions: RowActions<CategoryVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'material:category:update',
    component: MaterialCategoryEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'material:category:remove',
    needTwoStep: true,
    func: (row) => removeMaterialCategory(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'material:category:save',
    component: MaterialCategoryAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listMaterialCategoryVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
