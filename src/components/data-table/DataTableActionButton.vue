<script lang="ts" setup>
import type { DataTableAction } from '@/components/data-table/types'
import type LoadingButton from '@/components/LoadingButton.vue'

const props = defineProps<{
  action: DataTableAction
}>()
const emits = defineEmits<{
  actionTrigger: [void]
}>()
const isWaitConfirm = ref(false)
const loadingButtonRef = ref<InstanceType<typeof LoadingButton> | null>(null)

const buttonText = computed(() => {
  if (isWaitConfirm.value) {
    return '确认' + props.action.title
  }
  return props.action.title
})

async function handleActionPositive() {
  if (!isWaitConfirm.value) {
    isWaitConfirm.value = true
    return
  }
  await props.action.func!()
  isWaitConfirm.value = false
  window.$message.success(props.action.title + '成功')
}

function handleActionNegative() {
  if (!loadingButtonRef.value?.isLoading) {
    isWaitConfirm.value = false
  }
}
</script>

<template>
  <n-button v-if="!action.func" secondary @click="emits('actionTrigger')">
    {{ buttonText }}
  </n-button>
  <LoadingButton
    v-else
    ref="loadingButtonRef"
    :func="handleActionPositive"
    :secondary="!isWaitConfirm"
    @blur="handleActionNegative"
  >
    {{ buttonText }}
  </LoadingButton>
</template>
