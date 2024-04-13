<script lang="ts" setup>
import {
  listFinancialTransactionBasicVOs,
  removeFinancialTransaction
} from '@/api/financial-transaction'
import FinancialTransactionAdd from '@/components/curd/FinancialTransactionAdd.vue'
import FinancialTransactionEdit from '@/components/curd/FinancialTransactionEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import UserBasicInfo from '@/components/UserBasicInfo.vue'
import type { FinancialTransactionBasicVO } from '@/types/api/vo'
import { type DataTableColumns, NNumberAnimation, NTime } from 'naive-ui'

const columns: DataTableColumns<FinancialTransactionBasicVO> = [
  {
    title: '交易日期',
    key: 'date',
    render(row) {
      return h(NTime, { time: row.date, type: 'datetime' })
    }
  },
  {
    title: '费用类别',
    key: 'category'
  },
  {
    title: '操作用户',
    key: 'operatorUser',
    render: ({ operatorUser }) => h(UserBasicInfo, { userBasic: operatorUser })
  },
  {
    title: '金额',
    key: 'amount',
    render(row) {
      return h(NNumberAnimation, { to: row.amount / 100, precision: 2, showSeparator: true })
    }
  },
  {
    title: '描述',
    key: 'description'
  }
]
const rowActions: RowActions<FinancialTransactionBasicVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'financial:cransaction:update',
    component: FinancialTransactionEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'financial:cransaction:remove',
    needTwoStep: true,
    func: (row) => removeFinancialTransaction(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'financial:cransaction:save',
    component: FinancialTransactionAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listFinancialTransactionBasicVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
