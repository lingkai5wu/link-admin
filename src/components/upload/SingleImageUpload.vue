<script lang="ts" setup>
import { generateOssGetObjectUrl } from '@/api/oss'
import type { UploadFileInfo } from 'naive-ui'

const objectName = defineModel<string | null>()
const fileList = ref<UploadFileInfo[]>()
initFileList()

function initFileList() {
  const name = objectName.value
  if (!name || name.length === 0) {
    return
  }
  const id = name.split('-')[0]
  fileList.value = [
    {
      id,
      name,
      status: 'finished'
    }
  ]
  generateOssGetObjectUrl(name).then((url) => {
    if (fileList.value![0] && fileList.value![0].id === id) {
      fileList.value![0].url = url
    }
  })
}

watch(fileList, () => {
  if (!fileList.value || fileList.value.length === 0) {
    objectName.value = ''
    return
  }
  objectName.value = fileList.value[0].name
})
</script>

<template>
  <BaseUpload v-model:file-list="fileList" :max="1" accept="image/*" list-type="image-card" />
</template>
