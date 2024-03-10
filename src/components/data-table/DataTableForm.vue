<script lang="ts" setup>
import type { DataTableActionFunc } from '@/components/data-table/types'
import { getDifferences } from '@/utils/common'

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
let originData = { ...formData.value }
const currentData = computed(() => getDifferences(originData, formData.value))
const isDisabled = computed(() => currentData.value === null)

async function handleClick() {
  if (currentData.value === null) {
    emits('actionSubmit', false)
    return
  }
  emits('actionFuncExec', true)
  try {
    await props.func!(currentData.value)
  } finally {
    emits('actionFuncExec', false)
  }
  originData = { ...formData.value }
  emits('actionSubmit', true)
}
</script>

<template>
  <n-form v-model="formData">
    <slot />
  </n-form>
  <n-flex size="large" vertical>
    <n-button
      :disabled="isDisabled"
      secondary
      style="width: 100%"
      type="warning"
      @click="formData = { ...originData }"
    >
      重置
    </n-button>
    <LoadingButton :func="handleClick" style="width: 100%" type="primary">提交</LoadingButton>
  </n-flex>
</template>
