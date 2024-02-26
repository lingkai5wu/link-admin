<script lang="ts" setup>
import type { PropType } from 'vue'

const props = defineProps({
  func: {
    type: Function as PropType<() => Promise<void>>,
    required: true
  },
  delay: {
    type: Number,
    default: 100
  }
})

const loading = ref(false)

async function handleClick() {
  const timeout = setTimeout(() => (loading.value = true), props.delay)
  try {
    await props.func()
  } finally {
    clearTimeout(timeout)
    loading.value = false
  }
}
</script>

<template>
  <n-button :loading @click="handleClick">
    <template #icon>
      <slot name="icon" />
    </template>
    <slot />
  </n-button>
</template>
