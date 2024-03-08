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
const isLoading = ref(false)

defineExpose({
  isLoading
})

async function handleClick() {
  const timeout = setTimeout(() => (isLoading.value = true), props.delay)
  try {
    await props.func()
  } finally {
    clearTimeout(timeout)
    isLoading.value = false
  }
}
</script>

<template>
  <n-button :loading="isLoading" @click="handleClick">
    <template #icon>
      <slot name="icon" />
    </template>
    <slot />
  </n-button>
</template>
