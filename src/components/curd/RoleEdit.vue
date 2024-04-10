<script lang="ts" setup>
import { updateRole } from '@/api/role'
import type { RoleUpdateDTO } from '@/types/api/query'
import type { RoleVO } from '@/types/api/vo'
import { clone } from '@/utils/common'

const props = defineProps<{
  row: RoleVO
}>()

const formData = ref<RoleUpdateDTO>(clone(props.row))
</script>

<template>
  <DataTableForm v-model="formData" :func="updateRole">
    <RoleBase v-model="formData" />
  </DataTableForm>
</template>
