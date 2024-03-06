<script lang="ts" setup>
import type { DataTableActions } from '@/components/data-table/types'

const props = defineProps<{
  actions: DataTableActions
  row: Data
}>()

function handleAction(actionKey: string) {
  window.$message.info(`action ${actionKey} is trigger in row id: ${props.row.id}`)
}
</script>

<template>
  <n-button-group>
    <ActionButton
      v-for="(action, key) in actions"
      :key="key"
      :action="action"
      :action-key="key as string"
      @action-trigger="handleAction"
    />
  </n-button-group>
</template>
