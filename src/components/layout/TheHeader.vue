<script lang="ts" setup>
import { generateOssGetObjectUrl } from '@/api/oss'
import { useUserStore } from '@/stores/user'
import { MenuOutline } from '@vicons/ionicons5'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => route.meta.title)

const userStore = useUserStore()

const avatarUrl = ref<string>()
const avatarObjectName = userStore.userVO?.avatar
if (avatarObjectName) {
  generateOssGetObjectUrl({
    objectName: avatarObjectName,
    imageProcessStyle: 'AVATAR'
  }).then((url) => {
    avatarUrl.value = url
  })
}
</script>

<template>
  <n-page-header style="margin: 20px">
    <template #title>
      <n-h2 style="margin: 0">{{ title }}</n-h2>
    </template>
    <template #extra>
      <n-flex>
        <n-avatar :src="avatarUrl" />
        <n-popover :show-arrow="false" style="padding: 0" trigger="click">
          <template #trigger>
            <n-button quaternary>
              <template #icon>
                <MenuOutline />
              </template>
            </n-button>
          </template>
          <TheSider />
        </n-popover>
      </n-flex>
    </template>
  </n-page-header>
</template>
