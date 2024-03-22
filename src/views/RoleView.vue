<script lang="ts" setup>
import { listRoleVOs, removeRole } from '@/api/role'
import RoleEdit from '@/components/curd/RoleEdit.vue'
import type { DataTableActions } from '@/components/data-table/types'
import type { RoleVO } from '@/types/api/vo'
import { type DataTableColumns } from 'naive-ui'

const columns: DataTableColumns<RoleVO> = [
  {
    title: '角色编码',
    key: 'code'
  },
  {
    title: '角色名',
    key: 'name'
  },
  {
    title: '描述',
    key: 'description'
  }
]
const actions: DataTableActions<RoleVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    component: RoleEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    func: (row) => removeRole(row.id)
  }
}
</script>

<template>
  <DataTable :actions="actions" :columns="columns" :func="listRoleVOs" />
</template>
