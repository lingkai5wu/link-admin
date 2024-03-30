<script lang="ts" setup>
import { updateRole } from '@/api/role'
import type { RoleUpdateDTO } from '@/types/api/query'
import type { RoleVO } from '@/types/api/vo'
import { pick } from '@/utils/data'

const props = defineProps<{
  row: RoleVO
}>()

const formData = ref<RoleUpdateDTO>(pick(props.row, ['id', 'code', 'name', 'description']))
</script>

<template>
  <DataTableForm v-model="formData" :func="updateRole">
    <RoleBase v-model="formData" />
  </DataTableForm>
</template>
