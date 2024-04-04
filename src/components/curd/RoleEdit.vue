<script lang="ts" setup>
import { updateRole } from '@/api/role'
import type { RoleUpdateDTO } from '@/types/api/query'
import type { RoleVO } from '@/types/api/vo'

const props = defineProps<{
  row: RoleVO
}>()

const formData = ref<RoleUpdateDTO>(props.row)
</script>

<template>
  <DataTableForm v-model="formData" :func="updateRole">
    <RoleBase v-model="formData" />
  </DataTableForm>
</template>
