<template>
  <n-layout>
    <n-flex align="center" class="container" justify="center" vertical>
      <n-h1>社区养宠服务平台</n-h1>
      <!-- TODO 调整标题 -->
      <n-card class="main">
        <router-view />
      </n-card>
      <n-p
        >登录即代表您已阅读并同意我们的
        <n-text type="info">服务协议</n-text>
        和
        <n-text type="info">隐私政策</n-text>
      </n-p>
    </n-flex>
  </n-layout>
</template>

<style scoped>
.container {
  min-height: 100vh;
}

.main {
  width: 320px;
}
</style>
