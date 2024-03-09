<script lang="ts" setup>
import DataTableForm from '@/components/data-table/DataTableForm.vue'
import type { MenuUpdateQuery } from '@/types/api/query'
import type { MenuOptionWithEx } from '@/types/menu'
import { pick } from '@/utils/common'

const props = defineProps<{
  row: MenuOptionWithEx
  func: (data: Data) => Promise<void>
}>()
const formData = ref<MenuUpdateQuery>(pick(props.row, ['id', 'pid', 'type', 'label', 'path']))
</script>

<template>
  <DataTableForm v-model:value="formData" :func="props.func">
    <n-form-item label="标签" path="label">
      <n-input v-model:value="formData.label" />
    </n-form-item>
    <n-form-item label="类型" path="type">
      <n-input v-model:value="formData.type" />
    </n-form-item>
    <n-form-item label="路径" path="path">
      <n-input v-model:value="formData.path" />
    </n-form-item>
  </DataTableForm>
</template>
