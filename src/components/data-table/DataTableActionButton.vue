<script lang="ts" setup>
import type { DataTableAction, RowDataWithId } from '@/components/data-table/types'

const props = defineProps<{
  action: DataTableAction
  row: RowDataWithId
  isGroupLoading: boolean
}>()
const emits = defineEmits<{
  actionTrigger: [void]
}>()

const isWaitConfirm = ref(false)
const isLoading = ref(false)
let changeLoadingTimeout: number

const buttonText = computed(() => {
  if (isWaitConfirm.value) {
    return '确认' + props.action.title
  }
  return props.action.title
})
const isDisabled = computed(() => {
  const b = !isLoading.value && props.isGroupLoading
  if (b) {
    return b
  }
  if (typeof props.action.disabled === 'function') {
    return props.action.disabled(props.row)
  }
  return false
})

watchEffect(() => {
  if (!props.isGroupLoading) {
    clearTimeout(changeLoadingTimeout)
    isLoading.value = false
  }
})

function handleActionPositive() {
  if (!isWaitConfirm.value) {
    isWaitConfirm.value = true
    return
  }
  isWaitConfirm.value = false
  emits('actionTrigger')
  changeLoadingTimeout = setTimeout(() => (isLoading.value = true), 100)
}

function handleActionNegative() {
  if (!isLoading.value) {
    isWaitConfirm.value = false
  }
}
</script>

<template>
  <n-button
    v-if="action.component"
    :disabled="isDisabled"
    :type="action.type"
    secondary
    @click="emits('actionTrigger')"
  >
    {{ buttonText }}
  </n-button>
  <n-button
    v-else
    :disabled="isDisabled"
    :loading="isLoading"
    :secondary="!isWaitConfirm"
    :type="action.type"
    @blur="handleActionNegative"
    @click="handleActionPositive"
  >
    {{ buttonText }}
  </n-button>
</template>
