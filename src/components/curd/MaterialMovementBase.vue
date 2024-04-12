<script lang="ts" setup>
import { listMaterialStockBasicVOs } from '@/api/material-stock'
import { listUserBasicVOs } from '@/api/user'
import type { MaterialMovementUpdateDTO } from '@/types/api/query'
import { entityStatusEnumConfig, materialMovementTypeEnumConfig } from '@/utils/enum'
import { NFormItem } from 'naive-ui'

const formData = defineModel<MaterialMovementUpdateDTO>({ default: {} })

async function getStockOptions() {
  const materialStockBasicVOs = await listMaterialStockBasicVOs()
  const options: OptionalEntity[] = materialStockBasicVOs.map((data) => ({
    id: data.id,
    label: `${data.material.name} - ${data.warehouse}`
  }))
  return options
}
</script>

<template>
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="库存"
    path="stockId"
  >
    <SelectEntity v-model="formData.stockId" :func="getStockOptions" />
  </n-form-item>
  <n-form-item
    :rule="{
      required: true,
      trigger: ['blur']
    }"
    label="变动类型"
    path="movementType"
  >
    <n-select v-model:value="formData.movementType" :options="materialMovementTypeEnumConfig" />
  </n-form-item>
  <n-form-item
    :rule="{
      required: true,
      trigger: ['blur']
    }"
    label="状态"
    path="status"
  >
    <n-select v-model:value="formData.status" :options="entityStatusEnumConfig" />
  </n-form-item>
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="操作用户"
    path="operatorUserId"
  >
    <SelectEntity v-model="formData.operatorUserId" :func="listUserBasicVOs" label-field="phone" />
  </n-form-item>
  <n-form-item label="接收用户" path="referenceUserId">
    <SelectEntity v-model="formData.referenceUserId" :func="listUserBasicVOs" label-field="phone" />
  </n-form-item>
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="变动数量"
    path="quantity"
  >
    <n-input-number v-model:value="formData.quantity" />
  </n-form-item>
  <n-form-item label="描述" path="description">
    <n-input v-model:value="formData.description" :autosize="{ minRows: 2 }" type="textarea" />
  </n-form-item>
  <ImageUploadFormItem v-model="formData.attachment" label="附件" path="attachment" />
</template>
