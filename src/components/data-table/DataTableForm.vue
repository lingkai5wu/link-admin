<script lang="ts" setup>
import type LoadingButton from '@/components/LoadingButton.vue'
import { clone } from '@/utils/common'
import { generateUpdateDTO } from '@/utils/data'
import { NForm } from 'naive-ui'

const props = defineProps<{
  func: (row: Data) => Promise<void | null>
}>()
const emits = defineEmits<{
  actionSubmit: [boolean]
  actionFuncExec: [boolean]
}>()
let oldFormData: Data
const formData = defineModel<Data>()
const formRef = ref<InstanceType<typeof NForm> | null>(null)
const loadingButtonRef = ref<InstanceType<typeof LoadingButton> | null>(null)

watch(
  formData,
  (newData, oldData) => {
    oldFormData = clone(oldData || newData!)
  },
  { once: true, deep: true }
)

async function handleClick() {
  if (!formData.value || !oldFormData) {
    emits('actionSubmit', false)
    return
  }
  try {
    await formRef.value?.validate()
  } catch (e) {
    return
  }
  let updateDTO = generateUpdateDTO(oldFormData, formData.value)
  if (updateDTO && Object.keys(updateDTO).length < 2) {
    emits('actionSubmit', false)
    return
  }
  try {
    await props.func!(updateDTO || formData.value)
  } finally {
    emits('actionFuncExec', false)
  }
  emits('actionSubmit', true)
}
</script>

<template>
  <n-spin :show="!formData">
    <n-form ref="formRef" :disabled="loadingButtonRef?.isLoading" :model="formData" v-bind="$attrs">
      <slot />
    </n-form>
    <LoadingButton ref="loadingButtonRef" :func="handleClick" style="width: 100%" type="primary">
      提交
    </LoadingButton>
  </n-spin>
</template>
