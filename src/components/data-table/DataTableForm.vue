<script lang="ts" setup>
import { getDifferences } from '@/utils/common'

const props = defineProps<{
  func: (data: Data) => Promise<void>
}>()
const emits = defineEmits<{
  actionSubmit: [boolean]
}>()
const formData = defineModel<Data>('value', { required: true })
const originData = { ...formData.value }

async function handleClick() {
  const data = getDifferences(originData, formData.value)
  if (data === null) {
    emits('actionSubmit', false)
    return
  }
  await props.func(data)
  emits('actionSubmit', true)
}
</script>

<template>
  <n-form v-model="formData">
    <slot />
  </n-form>
  <n-flex size="large" vertical>
    <n-button style="width: 100%" @click="formData = { ...originData }">重置</n-button>
    <LoadingButton :func="handleClick" style="width: 100%" type="primary">提交</LoadingButton>
  </n-flex>
</template>
