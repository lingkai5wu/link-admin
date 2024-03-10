<script lang="ts" setup>
import type { DataTableActionFunc } from '@/components/data-table/types'

const props = defineProps<{
  func?: DataTableActionFunc
}>()
const emits = defineEmits<{
  actionSubmit: [boolean]
  actionFuncExec: [boolean]
}>()
defineOptions({
  inheritAttrs: false
})
const formData = defineModel<Data>('value', { required: true })

async function handleClick() {
  emits('actionFuncExec', true)
  try {
    await props.func!(formData.value)
  } finally {
    emits('actionFuncExec', false)
  }
  emits('actionSubmit', true)
}
</script>

<template>
  <n-form v-model="formData">
    <slot />
  </n-form>
  <n-flex size="large" vertical>
    <LoadingButton :func="handleClick" style="width: 100%" type="primary">提交</LoadingButton>
  </n-flex>
</template>
