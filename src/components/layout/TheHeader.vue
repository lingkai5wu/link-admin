<script lang="ts" setup>
import { MenuOutline } from '@vicons/ionicons5'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => route.meta.title)
</script>

<template>
  <n-flex justify="space-between" style="margin: 20px">
    <h2 style="margin: 0">{{ title }}</h2>
    <n-popover :show-arrow="false" style="padding: 0" trigger="click">
      <template #trigger>
        <n-button>
          <template #icon>
            <MenuOutline />
          </template>
        </n-button>
      </template>
      <TheSider />
    </n-popover>
  </n-flex>
</template>
