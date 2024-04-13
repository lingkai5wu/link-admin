<script lang="ts" setup>
import { getMaterialStockVO, updateMaterialStock } from '@/api/material-stock'
import type { MaterialStockUpdateDTO } from '@/types/api/query'
import type { MaterialStockBasicVO } from '@/types/api/vo'

const props = defineProps<{
  row: MaterialStockBasicVO
}>()

const formData = ref<MaterialStockUpdateDTO>()
getMaterialStockVO(props.row.id).then((data) => {
  formData.value = data
})
</script>

<template>
  <DataTableForm v-model="formData" :func="updateMaterialStock">
    <MaterialStockBase v-model="formData" />
  </DataTableForm>
</template>
