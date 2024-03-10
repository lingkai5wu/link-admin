<script lang="ts" setup>
import DataTableActionButton from '@/components/data-table/DataTableActionButton.vue'
import type {
  DataTableAction,
  DataTableActions,
  DataTableActionWithComponent,
  RowDataWithId
} from '@/components/data-table/types'

const props = defineProps<{
  actions: DataTableActions
  row: RowDataWithId
}>()
const emits = defineEmits<{
  actionTrigger: [DataTableActionWithComponent, RowDataWithId]
  actionSubmit: [boolean]
}>()

const isLoading = ref(false)

async function handleActionTrigger(action: DataTableAction) {
  if (!action.component) {
    isLoading.value = true
    await action.func(props.row)
    emits('actionSubmit', true)
    isLoading.value = false
    return
  }
  emits('actionTrigger', action, props.row)
}
</script>

<template>
  <n-button-group>
    <DataTableActionButton
      v-for="(action, key) in actions"
      :key="key"
      :action="action"
      :is-group-loading="isLoading"
      :row="row"
      @action-trigger="handleActionTrigger(action)"
    />
  </n-button-group>
</template>
