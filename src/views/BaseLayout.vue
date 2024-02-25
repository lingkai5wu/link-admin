<script lang="ts" setup>
import TheSider from '@/components/layout/TheSider.vue'
</script>
<template>
  <n-layout has-sider>
    <n-layout-sider>
      <TheSider />
    </n-layout-sider>
    <n-layout-content>
      <router-view />
    </n-layout-content>
  </n-layout>
</template>
