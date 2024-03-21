<script lang="ts" setup>
import { listCurrentUserRoleVOs, listRoleVOs } from '@/api/role'
import { updateUserRoleByBatch } from '@/api/user'
import DataTableTransfer from '@/components/data-table/DataTableTransfer.vue'
import type { UserVO } from '@/types/api/vo'

defineProps<{
  row: UserVO
}>()

async function getOptionsFunc() {
  const roleVOs = await listRoleVOs()
  return roleVOs.map((roleVO) => ({
    label: roleVO.name,
    value: roleVO.id
  }))
}

async function getValueFunc() {
  const roleVOs = await listCurrentUserRoleVOs()
  return roleVOs.map((roleVO) => roleVO.id)
}
</script>

<template>
  <DataTableTransfer
    :id="row.id"
    :get-options-func="getOptionsFunc"
    :get-value-func="getValueFunc"
    :submit-func="updateUserRoleByBatch"
  />
</template>
