<script lang="ts" setup>
import { listPermissionVOsWithPage, syncPermission } from '@/api/permission'
import PermissionEdit from '@/components/curd/PermissionEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { PermissionVO } from '@/types/api/vo'
import { type DataTableColumns } from 'naive-ui'

const columns: DataTableColumns<PermissionVO> = [
  {
    title: '权限编码',
    key: 'code'
  },
  {
    title: '描述',
    key: 'description'
  }
]
const rowActions: RowActions<PermissionVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'permission:update',
    component: PermissionEdit
  }
}
const topActions: TopActions = {
  sync: {
    title: '同步',
    type: 'primary',
    permission: 'permission:sync',
    func: syncPermission
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listPermissionVOsWithPage"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
