<script lang="ts" setup>
import type { Action, RowDataWithId } from '@/components/data-table/types'

const props = defineProps<{
  action: Action
  row?: RowDataWithId
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
    return '确认'
  }
  return props.action.title
})
const isDisabled = computed(() => {
  if (props.isGroupLoading) {
    return true
  }
  if (typeof props.action.disabled === 'function' && props.row) {
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
  changeLoadingTimeout = setTimeout(() => (isLoading.value = true), 300)
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
