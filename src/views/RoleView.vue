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
    permission: 'role:update',
    component: RoleEdit
  },
  permissionEdit: {
    title: '权限',
    permission: ['role:update', 'permission:update'],
    component: RolePermissionEdit
  },
  menuEdit: {
    title: '菜单',
    permission: ['role:update', 'menu:update'],
    component: RoleMenuEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'role:remove',
    func: (row) => removeRole(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'role:save',
    component: RoleAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listRoleVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
