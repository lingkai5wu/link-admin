<script lang="ts" setup>
import { getMaterialWarehouseVO, updateMaterialWarehouse } from '@/api/material-warehouse'
import type { MaterialWarehouseUpdateDTO } from '@/types/api/query'
import type { MaterialWarehouseBasicVO } from '@/types/api/vo'

const props = defineProps<{
  row: MaterialWarehouseBasicVO
}>()

const formData = ref<MaterialWarehouseUpdateDTO>()
getMaterialWarehouseVO(props.row.id).then((data) => {
  formData.value = data
})
</script>

<template>
  <DataTableForm v-model="formData" :func="updateMaterialWarehouse">
    <MaterialWarehouseBase v-model="formData" />
  </DataTableForm>
</template>
