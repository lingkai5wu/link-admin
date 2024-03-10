<script setup lang="ts">
import type { MenuUpdateQuery } from '@/types/api/query'
import type { MenuOptionWithEx } from '@/types/menu'

defineProps<{
  tableData: MenuOptionWithEx[]
}>()
const formData = defineModel<Nullable<MenuUpdateQuery>>({ required: true })
</script>

<template>
  <n-form-item label="父菜单" path="pid">
    <n-cascader
      :options="tableData"
      value-field="id"
      v-model:value="formData.pid"
    />
  </n-form-item>
  <n-form-item label="标签" path="label">
    <n-input v-model:value="formData.label" />
  </n-form-item>
  <n-form-item label="类型" path="type">
    <n-radio-group v-model:value="formData.type" name="type">
      <n-radio-button value="PARENT" label="父菜单" />
      <n-radio-button value="ROUTE" label="路由" />
      <n-radio-button value="LINK" label="链接" />
    </n-radio-group>
  </n-form-item>
  <n-form-item label="路径" path="path">
    <n-input v-model:value="formData.path" />
  </n-form-item>
</template>

<style scoped></style>
