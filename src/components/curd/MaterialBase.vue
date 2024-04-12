<script lang="ts" setup>
import { listMaterialCategoryVOs } from '@/api/material-category'
import SelectEntity from '@/components/data-table/SelectEntity.vue'
import type { MaterialUpdateDTO } from '@/types/api/query'
import { entityStatusEnumConfig } from '@/utils/enum'
import { NFormItem } from 'naive-ui'

const formData = defineModel<MaterialUpdateDTO>({ default: {} })
</script>

<template>
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="分类"
    path="categoryId"
  >
    <SelectEntity v-model="formData.categoryId" :func="listMaterialCategoryVOs" />
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
      required: true,
      trigger: ['blur']
    }"
    label="名称"
    path="name"
  >
    <n-input v-model:value="formData.name" />
  </n-form-item>
  <n-form-item label="规格" path="specification">
    <n-input v-model:value="formData.specification" :autosize="{ minRows: 1 }" type="textarea" />
  </n-form-item>
  <n-form-item
    :rule="{
      required: true,
      trigger: ['blur']
    }"
    label="单位"
    path="unit"
  >
    <n-input v-model:value="formData.unit" />
  </n-form-item>
  <n-form-item label="备注" path="content">
    <n-input v-model:value="formData.content" :autosize="{ minRows: 2 }" type="textarea" />
  </n-form-item>
  <ImageUploadFormItem v-model="formData.attachment" label="附件" path="attachment" />
</template>
