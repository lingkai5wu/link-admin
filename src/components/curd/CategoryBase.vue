<script lang="ts" setup>
import type { CategoryUpdateDTO } from '@/types/api/query'

const formData = defineModel<CategoryUpdateDTO>({ required: true })
</script>

<template>
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
</template>
