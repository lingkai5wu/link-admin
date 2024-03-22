<script lang="ts" setup>
import { listMenuVOs } from '@/api/menu'
import { listRoleMenuVOs, updateRoleMenuByBatch } from '@/api/role'
import DataTableTransfer from '@/components/data-table/DataTableTransfer.vue'
import type { RoleVO } from '@/types/api/vo'

const props = defineProps<{
  row: RoleVO
}>()

async function getOptionsFunc() {
  const menuVOs = await listMenuVOs()
  return menuVOs.map((menuVO) => ({
    label: menuVO.label,
    value: menuVO.id
  }))
}

async function getValueFunc() {
  const menuVOs = await listRoleMenuVOs(props.row.id)
  return menuVOs.map((menuVO) => menuVO.id)
}
</script>

<template>
  <DataTableTransfer
    :id="row.id"
    :get-options-func="getOptionsFunc"
    :get-value-func="getValueFunc"
    :submit-func="updateRoleMenuByBatch"
  />
</template>
