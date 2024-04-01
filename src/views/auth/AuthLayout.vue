<template>
  <n-layout>
    <n-flex align="center" class="container" justify="center">
      <n-card class="main">
        <router-view />
      </n-card>
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
