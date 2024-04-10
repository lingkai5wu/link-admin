<script lang="ts" setup>
import { saveMaterialWarehouse } from '@/api/material-warehouse'
import type { CategorySaveDTO } from '@/types/api/query'

const formData = ref<CategorySaveDTO>({})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveMaterialWarehouse">
    <MaterialWarehouseBase v-model="formData" />
  </DataTableForm>
</template>
