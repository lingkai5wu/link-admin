<script lang="ts" setup>
import { generateOssGetObjectUrl } from '@/api/oss'
import type { UploadFileInfo } from 'naive-ui'

const objectName = defineModel<string | null>()
const fileList = ref<UploadFileInfo[]>()
if (objectName.value && objectName.value.length > 0) {
  generateOssGetObjectUrl(objectName.value).then((url) => {
    fileList.value = [
      {
        id: objectName.value!.split('-')[0],
        name: objectName.value!,
        status: 'finished',
        url
      }
    ]
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
