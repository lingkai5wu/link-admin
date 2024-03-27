<script lang="ts" setup>
import { MenuOutline } from '@vicons/ionicons5'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => route.meta.title)
</script>

<template>
  <n-page-header style="margin: 20px">
    <template #title>
      <n-h2 style="margin: 0">{{ title }}</n-h2>
    </template>
    <template #extra>
      <n-popover :show-arrow="false" style="padding: 0" trigger="click">
        <template #trigger>
          <n-button quaternary>
            <template #icon>
              <MenuOutline />
            </template>
          </n-button>
        </template>
        <TheSider />
      </n-popover>
    </template>
  </n-page-header>
</template>
