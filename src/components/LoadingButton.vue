<script lang="ts" setup>
const props = defineProps({
  func: {
    type: Function,
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
    <slot />
  </n-button>
</template>
