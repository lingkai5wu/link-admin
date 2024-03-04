<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    func: () => Promise<void>
    delay?: number
  }>(),
  {
    delay: 100
  }
)

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
