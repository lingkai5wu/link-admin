<script setup lang="ts">
import { darkTheme, dateZhCN, useOsTheme, zhCN } from 'naive-ui'
import { computed } from 'vue'

const osTheme = useOsTheme()
const theme = computed(() => (osTheme.value === 'dark' ? darkTheme : null))
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
    <n-layout>
      <router-view />
    </n-layout>
  </n-config-provider>
</template>
