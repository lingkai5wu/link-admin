<script lang="ts" setup>
import { logout } from '@/api/auth'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { useUserStore } from '@/stores/user'
import { LogOutOutline, MenuOutline } from '@vicons/ionicons5'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => route.meta.title)

const userStore = useUserStore()

async function handleLogout() {
  await logout()
  const authStore = useAuthStore()
  authStore.token = null
  window.$message.success('登出成功')
  await router.push({ name: 'login' })
}
</script>

<template>
  <n-page-header style="margin: 20px">
    <template #title>
      <n-h2 style="margin: 0">{{ title }}</n-h2>
    </template>
    <template #extra>
      <n-flex>
        <n-popover :show-arrow="false">
          <template #trigger>
            <UserBasicInfo :user-basic="userStore.userVO" />
          </template>
          <LoadingButton :func="handleLogout" secondary type="warning">
            <template #icon>
              <LogOutOutline />
            </template>
            登出
          </LoadingButton>
        </n-popover>
        <n-popover :show-arrow="false" style="padding: 0" trigger="click">
          <template #trigger>
            <n-button quaternary>
              <template #icon>
                <MenuOutline />
              </template>
            </n-button>
          </template>
          <TheMenu />
        </n-popover>
      </n-flex>
    </template>
  </n-page-header>
</template>
