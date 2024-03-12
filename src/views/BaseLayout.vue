<script lang="ts" setup>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheSider from '@/components/layout/TheSider.vue'
</script>
<template>
  <n-layout has-sider>
    <n-layout-sider class="sider">
      <TheSider />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <TheHeader />
      </n-layout-header>
      <n-layout-content style="margin: 20px">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.sider {
  height: 100vh;
  @media screen and (max-width: 1024px) {
    display: none;
  }
}
</style>
