<script lang="ts" setup>
import { darkTheme, dateZhCN, useOsTheme, zhCN } from 'naive-ui'
import { computed } from 'vue'

const osTheme = useOsTheme()
const theme = computed(() => (osTheme.value === 'dark' ? darkTheme : null))
</script>

<template>
  <n-config-provider :date-locale="dateZhCN" :locale="zhCN" :theme="theme">
    <n-theme-editor>
      <router-view />
    </n-theme-editor>
  </n-config-provider>
</template>
