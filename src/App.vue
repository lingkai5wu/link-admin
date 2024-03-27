<script lang="ts" setup>
import { theme } from '@/utils/naive-ui'
import { dateZhCN, NThemeEditor, zhCN } from 'naive-ui'

onBeforeMount(() => {
  const element = document.getElementById('banter-loader')
  document.body.removeChild(element!)
})
</script>

<template>
  <n-config-provider :date-locale="dateZhCN" :locale="zhCN" :theme="theme">
    <n-theme-editor>
      <router-view />
    </n-theme-editor>
  </n-config-provider>
</template>
