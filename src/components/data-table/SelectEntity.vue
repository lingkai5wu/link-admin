<script lang="ts" setup>
import { renderOption } from '@/utils/form'

const props = defineProps<{
  func: () => Promise<DataWithId[]>
}>()
const model = defineModel<number | null>()
const selectOptions = ref<DataWithId[]>([])
props.func().then((data) => {
  selectOptions.value = data
})
</script>

<template>
  <n-select
    v-model:value="model"
    :loading="selectOptions.length === 0"
    :options="selectOptions"
    :render-option="renderOption"
    filterable
    value-field="id"
  />
</template>
