<script lang="ts" setup>
import { listMaterialBasicVOs } from '@/api/material'
import { listMaterialWarehouseBasicVOs } from '@/api/material-warehouse'
import type { MaterialStockUpdateDTO } from '@/types/api/query'

const formData = defineModel<MaterialStockUpdateDTO>({ default: {} })
</script>

<template>
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="物资项"
    path="materialId"
  >
    <SelectEntity v-model="formData.materialId" :func="listMaterialBasicVOs" label-field="name" />
  </n-form-item>
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="仓库"
    path="warehouseId"
  >
    <SelectEntity v-model="formData.warehouseId" :func="listMaterialWarehouseBasicVOs" />
  </n-form-item>
  <n-form-item
    :rule="{
      type: 'number',
      min: 0,
      max: formData.max || undefined,
      trigger: ['blur', 'input']
    }"
    label="最低预警"
    path="min"
  >
    <n-input-number v-model:value="formData.min" />
  </n-form-item>
  <n-form-item
    :rule="{
      type: 'number',
      min: formData.min || 0,
      trigger: ['blur', 'input']
    }"
    label="最高上限"
    path="max"
  >
    <n-input-number v-model:value="formData.max" />
  </n-form-item>
</template>
