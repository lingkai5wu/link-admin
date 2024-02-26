<script lang="ts" setup>
import { logout } from '@/api/auth'
import TheMenu from '@/components/layout/TheMenu.vue'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import { LogOutOutline } from '@vicons/ionicons5'

async function handleLogout() {
  await logout()
  const authStore = useAuthStore()
  authStore.token = null
  window.$message.success('登出成功')
  await router.push({ name: 'login' })
}
</script>

<template>
  <n-flex justify="space-between" style="height: 100%" vertical>
    <TheMenu />
    <n-flex justify="right" style="padding: 20px">
      <LoadingButton :func="handleLogout" secondary type="warning">
        <template #icon>
          <LogOutOutline />
        </template>
        登出
      </LoadingButton>
    </n-flex>
  </n-flex>
</template>
