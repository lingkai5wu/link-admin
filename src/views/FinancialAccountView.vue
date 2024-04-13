<script lang="ts" setup>
import { listFinancialAccountBasicVOs, removeFinancialAccount } from '@/api/financial-account'
import FinancialAccountAdd from '@/components/curd/FinancialAccountAdd.vue'
import FinancialAccountEdit from '@/components/curd/FinancialAccountEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import UserBasicInfo from '@/components/UserBasicInfo.vue'
import type { FinancialAccountBasicVO } from '@/types/api/vo'
import { entityStatusEnumConfig, enum2Tag } from '@/utils/enum'
import { type DataTableColumns, NNumberAnimation } from 'naive-ui'

const columns: DataTableColumns<FinancialAccountBasicVO> = [
  {
    title: '账户名',
    key: 'name'
  },
  {
    title: '状态',
    key: 'status',
    render(row) {
      return enum2Tag(entityStatusEnumConfig, row.status)
    }
  },
  {
    title: '管理用户',
    key: 'user',
    render: ({ user }) => h(UserBasicInfo, { userBasic: user })
  },
  {
    title: '当前余额',
    key: 'balance',
    render(row) {
      return h(NNumberAnimation, { to: row.balance / 100, precision: 2, showSeparator: true })
    }
  },
  {
    title: '描述',
    key: 'description'
  }
]
const rowActions: RowActions<FinancialAccountBasicVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'financial:account:update',
    component: FinancialAccountEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'financial:account:remove',
    needTwoStep: true,
    func: (row) => removeFinancialAccount(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'financial:account:save',
    component: FinancialAccountAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listFinancialAccountBasicVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
