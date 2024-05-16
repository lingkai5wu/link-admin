<script lang="ts" setup>
import type { Action } from '@/components/data-table/types'
import { isActionAuthorized } from '@/utils/permission'

const props = defineProps<{
  action: Action
  row?: DataWithId
  isGroupLoading: boolean
}>()
const emits = defineEmits<{
  actionTrigger: [void]
}>()

const isWaitConfirm = ref(false)
const isLoading = ref(false)
let changeLoadingTimeout: number

const buttonText = computed(() => {
  if (props.action.needTwoStep && isWaitConfirm.value) {
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
const isShow = computed(() => isActionAuthorized(props.action, props.row))

watchEffect(() => {
  if (!props.isGroupLoading) {
    clearTimeout(changeLoadingTimeout)
    isLoading.value = false
  }
})

function handleActionPositive() {
  if (props.action.needTwoStep && !isWaitConfirm.value) {
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
  <div v-if="isShow">
    <n-button
      v-if="action.component"
      :disabled="isDisabled"
      :tertiary="!(props.action.needTwoStep && isWaitConfirm)"
      :type="action.type"
      @click="emits('actionTrigger')"
    >
      {{ buttonText }}
    </n-button>
    <n-button
      v-else
      :disabled="isDisabled"
      :loading="isLoading"
      :tertiary="!(props.action.needTwoStep && isWaitConfirm)"
      :type="action.type"
      @blur="handleActionNegative"
      @click="handleActionPositive"
    >
      {{ buttonText }}
    </n-button>
  </div>
</template>
