<script lang="ts" setup>
import { useOssStore } from '@/stores/oss'
import type { OssDirectPostObjectInfoVO } from '@/types/api/vo'
import { pick } from '@/utils/data'
import { generateOssObjectName } from '@/utils/upload'
import { NUpload, type UploadFileInfo } from 'naive-ui'

const ossDirectPostObjectInfo = ref<OssDirectPostObjectInfoVO>()
const uploadRef = ref<InstanceType<typeof NUpload> | null>(null)
const ossStore = useOssStore()

async function handleBeforeUpload({ file }: { file: UploadFileInfo }) {
  ossDirectPostObjectInfo.value = await ossStore.getValidOssDirectPostObjectInfo()
  let maxSize = ossDirectPostObjectInfo.value.maxSize
  if (file.file!.size > maxSize) {
    window.$message.error(`文件过大，请选择小于 ${maxSize / 1024 / 1024}MB 的文件`)
    return false
  }

  let accept = uploadRef.value?.accept
  if (accept) {
    const pattern = accept.endsWith('*') ? accept.substring(0, accept.length - 1) : accept
    if (!file.type!.startsWith(pattern)) {
      window.$message.error(`不支持该文件类型`)
      return false
    }
  }

  file.name = generateOssObjectName(file)
}

const generateData = ({ file }: { file: UploadFileInfo }) => {
  return {
    ...pick(ossDirectPostObjectInfo.value!, ['ossAccessKeyId', 'policy', 'signature']),
    key: file.name,
    'content-disposition': file.file!.name
  }
}
</script>

<template>
  <n-upload
    ref="uploadRef"
    :action="ossDirectPostObjectInfo?.host"
    :data="generateData"
    :on-before-upload="handleBeforeUpload"
  >
    <slot />
  </n-upload>
</template>
