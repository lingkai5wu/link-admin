<script lang="ts" setup>
import { listUserBasicVOs } from '@/api/user'
import type { MaterialWarehouseUpdateDTO } from '@/types/api/query'

const formData = defineModel<MaterialWarehouseUpdateDTO>({ default: {} })
</script>

<template>
  <n-form-item label="位置" path="locationId">
    <n-input-number v-model:value="formData.locationId" />
  </n-form-item>
  <n-form-item
    :rule="{
      required: true,
      trigger: ['blur']
    }"
    label="标签"
    path="label"
  >
    <n-input v-model:value="formData.label" />
  </n-form-item>
  <n-form-item label="描述" path="description">
    <n-input v-model:value="formData.description" :autosize="{ minRows: 1 }" type="textarea" />
  </n-form-item>
  <n-form-item label="保管用户" path="keeperUserId">
    <SelectEntity v-model="formData.keeperUserId" :func="listUserBasicVOs" label-field="phone" />
  </n-form-item>
  <n-form-item label="联系方式" path="contact">
    <n-input v-model:value="formData.contact" :autosize="{ minRows: 1 }" type="textarea" />
  </n-form-item>
</template>
