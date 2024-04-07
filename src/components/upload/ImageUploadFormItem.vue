<script lang="ts" setup>
import { createFormItemRule } from '@/utils/upload'
import type { UploadFileInfo } from 'naive-ui'
import { NFormItem } from 'naive-ui'

const objectNames = defineModel<string[] | null>()
const fileList = ref<UploadFileInfo[]>()
const formItemRef = ref<InstanceType<typeof NFormItem> | null>(null)

function initFileList() {
  if (!objectNames.value) {
    return
  }
  stopFileListInitWatcher()
  fileList.value = objectNames.value.map((name) => ({
    id: name.split('-')[0],
    name,
    status: 'finished'
  }))
}

const stopFileListInitWatcher = watch(objectNames, initFileList, { once: true })
initFileList()

watch(fileList, async (newList) => {
  if (!newList || newList.length === 0 || newList.some((file) => file.status !== 'finished')) {
    return
  }
  await nextTick()
  formItemRef.value?.validate()
  objectNames.value = newList.map((file) => file.name)
})
</script>

<template>
  <n-form-item ref="formItemRef" :rule="createFormItemRule(fileList!)">
    <ImageUpload v-model="fileList" :max="30" v-bind="$attrs" />
  </n-form-item>
</template>
