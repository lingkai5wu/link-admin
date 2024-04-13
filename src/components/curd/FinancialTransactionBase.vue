<script lang="ts" setup>
import { listFinancialAccountBasicVOs } from '@/api/financial-account'
import { listFinancialTransactionCategoryVOs } from '@/api/financial-transaction-category'
import { listUserBasicVOs } from '@/api/user'
import type { FinancialTransactionUpdateDTO } from '@/types/api/query'
import { NFormItem } from 'naive-ui'

const formData = defineModel<FinancialTransactionUpdateDTO>({ default: {} })
</script>

<template>
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="交易日期"
    path="date"
  >
    <n-date-picker v-model:value="formData.date" type="datetime" />
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
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="资金账户"
    path="accountId"
  >
    <SelectEntity
      v-model="formData.accountId"
      :func="listFinancialAccountBasicVOs"
      label-field="name"
    />
  </n-form-item>
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="费用类别"
    path="categoryId"
  >
    <SelectEntity v-model="formData.categoryId" :func="listFinancialTransactionCategoryVOs" />
  </n-form-item>
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="交易金额"
    path="amount"
  >
    <InputMoney v-model="formData.amount" />
  </n-form-item>
  <n-form-item label="描述" path="description">
    <n-input v-model:value="formData.description" :autosize="{ minRows: 2 }" type="textarea" />
  </n-form-item>
  <ImageUploadFormItem v-model="formData.attachment" label="附件" path="attachment" />
</template>
