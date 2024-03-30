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
const formData = defineModel<Data>({ required: true })
const oldFormData = clone(formData.value)
const formRef = ref<InstanceType<typeof NForm> | null>(null)
const loadingButtonRef = ref<InstanceType<typeof LoadingButton> | null>(null)

async function handleClick() {
  await formRef.value?.validate()
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
  <n-form ref="formRef" :disabled="loadingButtonRef?.isLoading" :model="formData" v-bind="$attrs">
    <slot />
  </n-form>
  <LoadingButton ref="loadingButtonRef" :func="handleClick" style="width: 100%" type="primary">
    提交
  </LoadingButton>
</template>
