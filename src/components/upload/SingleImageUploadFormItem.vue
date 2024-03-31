<script lang="ts" setup>
import { createFormItemRule } from '@/utils/upload'
import type { UploadFileInfo } from 'naive-ui'
import { NFormItem } from 'naive-ui'

const objectName = defineModel<string | null>()
const fileList = ref<UploadFileInfo[]>([])
initFileList()
const formItemRef = ref<InstanceType<typeof NFormItem> | null>(null)

function initFileList() {
  const value = objectName.value
  if (!value) {
    return
  }
  const id = value.split('-')[0]
  fileList.value = [
    {
      id,
      name: value,
      status: 'finished'
    }
  ]
}

watch(fileList, async (newList) => {
  if (newList.length > 0 && !newList.some((file) => file.status === 'finished')) {
    return
  }
  await nextTick()
  formItemRef.value?.validate()
  if (newList.length > 0) {
    objectName.value = newList[0].name
  } else {
    objectName.value = ''
  }
})
</script>

<template>
  <n-form-item ref="formItemRef" :rule="createFormItemRule(fileList)">
    <ImageUpload v-model="fileList" :max="1" />
  </n-form-item>
</template>

<style scoped></style>
