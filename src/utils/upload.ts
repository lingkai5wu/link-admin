import { useUserStore } from '@/stores/user'
import type { UploadFileInfo } from 'naive-ui'

function getExtname(url: string) {
  const split = url.split('/')
  const filename = split[split.length - 1]
  const filenameWithoutSuffix = filename.split(/[#?]/)[0]
  return (/\.[^./\\]*$/.exec(filenameWithoutSuffix) || [''])[0]
}

export function generateOssObjectName(file: UploadFileInfo) {
  const userStore = useUserStore()
  return [file.id, userStore.userVO?.id, Date.now()].join('-') + getExtname(file.name)
}
