<script lang="ts" setup>
import { countUsers } from '@/api/user'
import { Person } from '@vicons/ionicons5'
import { useUserStore } from '@/stores/user'

const userCount = ref<number>()
const userStore = useUserStore()
countUsers().then(data => {
  userCount.value = data
})
</script>

<template>
  <n-grid :cols="4" x-gap="12">
    <n-gi span="2">
      <n-h1>欢迎使用社区养宠服务平台</n-h1>
    </n-gi>
    <n-gi>
      <n-statistic label="系统用户">
        <template #prefix>
          <n-icon>
            <Person />
          </n-icon>
        </template>
        {{ userCount }}
      </n-statistic>
    </n-gi>
  </n-grid>
  <n-calendar />
</template>

<style scoped>

</style>