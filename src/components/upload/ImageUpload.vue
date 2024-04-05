<script lang="ts" setup>
import { generateOssGetObjectUrl } from '@/api/oss'
import type { UploadFileInfo } from 'naive-ui'

const fileList = defineModel<UploadFileInfo[]>()

function initFileUrl() {
  if (!fileList.value) {
    return
  }
  stopFileUrlInitWatcher()
  if (fileList.value.length === 0) {
    return
  }
  fileList.value.forEach((file) => {
    generateOssGetObjectUrl(file.name).then((url) => {
      file.url = url
    })
  })
}

const stopFileUrlInitWatcher = watch(fileList, initFileUrl, { once: true })
initFileUrl()
</script>

<template>
  <BaseUpload v-model:file-list="fileList" accept="image/*" list-type="image-card" />
</template>
