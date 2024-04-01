import { useUserStore } from '@/stores/user'
import type { FormItemRule, UploadFileInfo } from 'naive-ui'

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

export const createFormItemRule = (fileList: UploadFileInfo[]): FormItemRule => ({
  validator() {
    if (!fileList || fileList.length === 0) {
      return
    }
    if (fileList.some((file) => file.status === 'uploading')) {
      return new Error('请等待文件上传完成')
    }
    if (fileList.some((file) => !(file.status === 'finished' || file.status === 'removed'))) {
      return new Error('存在未上传的文件')
    }
  }
})
