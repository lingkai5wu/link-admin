<template>
  <n-layout has-sider style="min-height: 100vh">
    <n-layout-sider :native-scrollbar="false" class="sider">
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
