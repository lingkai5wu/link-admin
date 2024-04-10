<script lang="ts" setup>
import {
  listFinancialTransactionCategoryVOs,
  removeFinancialTransactionCategory
} from '@/api/financial-transaction-category'
import FinancialTransactionCategoryAdd from '@/components/curd/FinancialTransactionCategoryAdd.vue'
import FinancialTransactionCategoryEdit from '@/components/curd/FinancialTransactionCategoryEdit.vue'
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
    component: FinancialTransactionCategoryEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'animal:category:remove',
    needTwoStep: true,
    func: (row) => removeFinancialTransactionCategory(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'animal:category:save',
    component: FinancialTransactionCategoryAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listFinancialTransactionCategoryVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
