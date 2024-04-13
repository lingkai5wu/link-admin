<script lang="ts" setup>
import { listUserBasicVOs } from '@/api/user'
import type { FinancialAccountUpdateDTO } from '@/types/api/query'
import { entityStatusEnumConfig } from '@/utils/enum'
import { NFormItem } from 'naive-ui'

const formData = defineModel<FinancialAccountUpdateDTO>({ default: {} })
</script>

<template>
  <n-form-item
    :rule="{
      required: true,
      trigger: ['blur']
    }"
    label="账户名"
    path="name"
  >
    <n-input v-model:value="formData.name" />
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
    label="管理用户"
    path="userId"
  >
    <SelectEntity v-model="formData.userId" :func="listUserBasicVOs" label-field="phone" />
  </n-form-item>
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="当前余额"
    path="balance"
  >
    <InputMoney v-model="formData.balance" />
  </n-form-item>
  <n-form-item label="描述" path="description">
    <n-input v-model:value="formData.description" :autosize="{ minRows: 2 }" type="textarea" />
  </n-form-item>
</template>
