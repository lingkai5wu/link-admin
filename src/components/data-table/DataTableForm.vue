<script lang="ts" setup>
import type { DataTableActionFunc } from '@/components/data-table/types'
import type LoadingButton from '@/components/LoadingButton.vue'
import { NForm } from 'naive-ui'

const props = defineProps<{
  func: DataTableActionFunc
}>()
const emits = defineEmits<{
  actionSubmit: [boolean]
  actionFuncExec: [boolean]
}>()
const formData = defineModel<Data>({ required: true })
const formRef = ref<InstanceType<typeof NForm> | null>(null)
const loadingButtonRef = ref<InstanceType<typeof LoadingButton> | null>(null)

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
  <n-form ref="formRef" :disabled="loadingButtonRef?.isLoading" :model="formData" v-bind="$attrs">
    <slot />
  </n-form>
  <LoadingButton ref="loadingButtonRef" :func="handleClick" style="width: 100%" type="primary">
    提交
  </LoadingButton>
</template>
