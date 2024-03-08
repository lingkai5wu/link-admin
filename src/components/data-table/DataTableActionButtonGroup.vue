<script lang="ts" setup>
import type { DataTableActions } from '@/components/data-table/types'

defineProps<{
  actions: DataTableActions
  row: Data
}>()
const emits = defineEmits<{
  refreshTableData: [void]
}>()
</script>

<template>
  <n-button-group>
    <DataTableActionButton
      v-for="(action, key) in actions"
      :key="key"
      :action="action"
      :row="row"
      @refresh-table-data="emits('refreshTableData')"
    />
  </n-button-group>
</template>
