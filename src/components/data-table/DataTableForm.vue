<script lang="ts" setup>
import type { DataTableActionFunc } from '@/components/data-table/types'
import { NForm } from 'naive-ui'

const props = defineProps<{
  func: DataTableActionFunc
}>()
const emits = defineEmits<{
  actionSubmit: [boolean]
  actionFuncExec: [boolean]
}>()
const formData = defineModel<Data>('value', { required: true })
const formRef = ref<InstanceType<typeof NForm> | null>(null)

async function handleClick() {
  await formRef.value?.validate()
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
  <n-form ref="formRef" :model="formData" v-bind="$attrs">
    <slot />
  </n-form>
  <n-flex size="large" vertical>
    <LoadingButton :func="handleClick" style="width: 100%" type="primary">提交</LoadingButton>
  </n-flex>
</template>
