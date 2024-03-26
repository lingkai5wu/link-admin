<script lang="ts" setup>
import { listRoleVOs, removeRole } from '@/api/role'
import RoleAdd from '@/components/curd/RoleAdd.vue'
import RoleEdit from '@/components/curd/RoleEdit.vue'
import RoleMenuEdit from '@/components/curd/RoleMenuEdit.vue'
import RolePermissionEdit from '@/components/curd/RolePermissionEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
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
const rowActions: RowActions<RoleVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    component: RoleEdit
  },
  permissionEdit: {
    title: '权限',
    component: RolePermissionEdit
  },
  menuEdit: {
    title: '菜单',
    component: RoleMenuEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    func: (row) => removeRole(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    component: RoleAdd
  }
}
</script>

<template>
  <DataTable :columns :func="listRoleVOs" :row-actions="rowActions" :top-actions="topActions" />
</template>
