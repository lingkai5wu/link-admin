<script lang="ts" setup>
import type { RoleUpdateDTO } from '@/types/api/query'

const formData = defineModel<RoleUpdateDTO>({ required: true })
</script>

<template>
  <n-form-item
    :rule="{
      required: true,
      trigger: ['blur']
    }"
    label="角色编码"
    path="code"
  >
    <n-input v-model:value="formData.code" />
  </n-form-item>
  <n-form-item
    :rule="{
      required: true,
      trigger: ['blur']
    }"
    label="角色名"
    path="name"
  >
    <n-input v-model:value="formData.name" />
  </n-form-item>
  <n-form-item label="描述" path="description">
    <n-input v-model:value="formData.description" />
  </n-form-item>
</template>
