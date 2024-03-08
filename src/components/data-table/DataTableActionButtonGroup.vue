<script lang="ts" setup>
import DataTableActionButton from '@/components/data-table/DataTableActionButton.vue'
import type { DataTableAction, DataTableActions } from '@/components/data-table/types'

defineProps<{
  actions: DataTableActions
  row: Data
}>()
const emits = defineEmits<{
  actionTrigger: [DataTableAction, Data]
}>()
</script>

<template>
  <n-button-group>
    <DataTableActionButton
      v-for="(action, key) in actions"
      :key="key"
      :action="action"
      :row="row"
      @action-trigger="emits('actionTrigger', action, row)"
    />
  </n-button-group>
</template>
