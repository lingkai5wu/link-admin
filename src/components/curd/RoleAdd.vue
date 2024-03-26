<script lang="ts" setup>
import { saveRole } from '@/api/role'
import type { RoleSaveDTO } from '@/types/api/query'

const formData = ref<RoleSaveDTO>({})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveRole">
    <RoleBase v-model="formData" />
  </DataTableForm>
</template>
