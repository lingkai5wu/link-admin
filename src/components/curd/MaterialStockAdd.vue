<script lang="ts" setup>
import { saveMaterialStock } from '@/api/material-stock'
import type { MaterialStockSaveDTO } from '@/types/api/query'

const formData = ref<MaterialStockSaveDTO>({})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveMaterialStock">
    <MaterialStockBase v-model="formData" />
  </DataTableForm>
</template>
