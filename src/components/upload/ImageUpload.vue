<script lang="ts" setup>
import { generateOssGetObjectUrl } from '@/api/oss'
import type { UploadFileInfo } from 'naive-ui'

const fileList = defineModel<UploadFileInfo[]>({ required: true })

function initFileUrl() {
  if (fileList.value.length === 0) {
    return
  }
  stopFileUrlInitWatcher()
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
