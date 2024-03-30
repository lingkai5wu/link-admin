<script lang="ts" setup>
import { listPermissionVOs } from '@/api/permission'
import { batchUpdateRolePermission, listRolePermissionVOs } from '@/api/role'
import DataTableTransfer from '@/components/data-table/DataTableTransfer.vue'
import type { RoleVO } from '@/types/api/vo'

const props = defineProps<{
  row: RoleVO
}>()

async function getOptionsFunc() {
  const permissionVOs = await listPermissionVOs()
  return permissionVOs.map((permissionVO) => ({
    label: permissionVO.code,
    value: permissionVO.id
  }))
}

async function getValueFunc() {
  const permissionVOs = await listRolePermissionVOs(props.row.id)
  return permissionVOs.map((permissionVO) => permissionVO.id)
}
</script>

<template>
  <n-p>
    分配
    <n-text type="info">{{ row.name }}</n-text>
    权限
  </n-p>
  <DataTableTransfer
    :id="row.id"
    :get-options-func="getOptionsFunc"
    :get-value-func="getValueFunc"
    :submit-func="batchUpdateRolePermission"
    v-bind="$attrs"
  />
</template>
