<script lang="ts" setup>
import { listPermissionVOs, syncPermission } from '@/api/permission'
import PermissionEdit from '@/components/curd/PermissionEdit.vue'
import type { DataTableActions } from '@/components/data-table/types'
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
const actions: DataTableActions<PermissionVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    component: PermissionEdit
  }
}
</script>

<template>
  <DataTable :actions="actions" :columns="columns" :func="listPermissionVOs">
    <n-flex>
      <LoadingButton :func="syncPermission" type="info">同步权限</LoadingButton>
    </n-flex>
  </DataTable>
</template>
