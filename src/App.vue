<script lang="ts" setup>
import { theme } from '@/utils/naive-ui'
import { dateZhCN, NThemeEditor, zhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider :date-locale="dateZhCN" :locale="zhCN" :theme="theme">
    <n-theme-editor>
      <router-view />
    </n-theme-editor>
  </n-config-provider>
</template>
