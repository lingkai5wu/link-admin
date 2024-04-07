<script lang="ts" setup>
import type { ForumUpdateDTO } from '@/types/api/query'
import { entityStatusEnumConfig } from '@/utils/enum'
import { NFormItem } from 'naive-ui'

const formData = defineModel<ForumUpdateDTO>({ required: true })
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
  <n-form-item label="描述" path="description">
    <n-input v-model:value="formData.description" :autosize="{ minRows: 1 }" type="textarea" />
  </n-form-item>
  <n-form-item label="公告" path="notice">
    <n-input v-model:value="formData.notice" :autosize="{ minRows: 2 }" type="textarea" />
  </n-form-item>
  <n-form-item label="版头" path="header">
    <n-input v-model:value="formData.header" :autosize="{ minRows: 2 }" type="textarea" />
  </n-form-item>
</template>
