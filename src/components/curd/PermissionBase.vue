<script lang="ts" setup>
import type { PermissionUpdateDTO } from '@/types/api/query'

const formData = defineModel<PermissionUpdateDTO>({ required: true })
</script>

<template>
  <n-form-item
    :rule="{
      required: true,
      trigger: ['blur']
    }"
    label="权限编码"
    path="code"
  >
    <n-input v-model:value="formData.code" />
  </n-form-item>
  <n-form-item label="描述" path="description">
    <n-input v-model:value="formData.description" />
  </n-form-item>
</template>
