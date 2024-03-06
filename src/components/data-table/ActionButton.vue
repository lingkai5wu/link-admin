<script lang="ts" setup>
import type { DataTableAction } from '@/components/data-table/types'

defineProps<{
  actionKey: string
  action: DataTableAction
}>()
defineEmits<{
  actionTrigger: [string]
}>()
</script>

<template>
  <n-button @click="$emit('actionTrigger', actionKey)">{{ action.title }}</n-button>
</template>
