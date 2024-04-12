<script lang="ts" setup>
import type { CategoryVO } from '@/types/api/vo'
import { renderOption } from '@/utils/form'

const props = defineProps<{
  func: () => Promise<CategoryVO[]>
}>()
const model = defineModel<number | null>()
const categoryOptions = ref<CategoryVO[]>([])
props.func().then((data) => {
  categoryOptions.value = data
})
</script>

<template>
  <n-select
    v-model:value="model"
    :loading="categoryOptions.length === 0"
    :options="categoryOptions"
    :render-option="renderOption"
    filterable
    value-field="id"
  />
</template>
