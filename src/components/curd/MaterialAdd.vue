<script lang="ts" setup>
import { saveMaterial } from '@/api/material'
import type { MaterialSaveDTO } from '@/types/api/query'

const formData = ref<MaterialSaveDTO>({
  status: 'APPROVED',
  unit: '个'
})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveMaterial">
    <MaterialBase v-model="formData" />
  </DataTableForm>
</template>
