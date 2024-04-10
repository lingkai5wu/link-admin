<script lang="ts" setup>
import { generateOssGetObjectUrl } from '@/api/oss'
import type { UserBasicVO } from '@/types/api/vo'

const props = defineProps<{
  userBasic: UserBasicVO | null | undefined
}>()
const avatarUrl = ref<string>()

function initAvatarUrl() {
  if (!props.userBasic) {
    return
  }
  stopAvatarUrlInitWatcher()
  if (!props.userBasic.avatar) {
    return
  }
  generateOssGetObjectUrl({
    objectName: props.userBasic.avatar,
    imageProcessStyle: 'AVATAR'
  }).then((url) => {
    avatarUrl.value = url
  })
}

const stopAvatarUrlInitWatcher = watch(() => props.userBasic, initAvatarUrl, { once: true })
initAvatarUrl()
</script>

<template>
  <n-flex>
    <n-avatar :src="avatarUrl" />
    <n-ellipsis :tooltip="false" style="max-width: 100px; line-height: 34px">
      {{ userBasic?.nickname || userBasic?.phone }}
    </n-ellipsis>
  </n-flex>
</template>

<style scoped></style>
