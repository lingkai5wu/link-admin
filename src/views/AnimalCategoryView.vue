<script lang="ts" setup>
import { listAnimalCategoryVOs, removeAnimalCategory } from '@/api/animal-category'
import AnimalCategoryAdd from '@/components/curd/AnimalCategoryAdd.vue'
import AnimalCategoryEdit from '@/components/curd/AnimalCategoryEdit.vue'
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
    permission: 'animal:category:update',
    component: AnimalCategoryEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'animal:category:remove',
    needTwoStep: true,
    func: (row) => removeAnimalCategory(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'animal:category:save',
    component: AnimalCategoryAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listAnimalCategoryVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
