<script lang="ts" setup>
import TheSider from '@/components/layout/TheSider.vue'
</script>
<template>
  <n-layout has-sider>
    <n-layout-sider style="height: 100vh">
      <TheSider />
    </n-layout-sider>
    <n-layout-content style="margin: 20px">
      <router-view />
    </n-layout-content>
  </n-layout>
</template>
