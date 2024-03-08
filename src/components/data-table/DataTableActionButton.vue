<script lang="ts" setup>
import type { DataTableAction } from '@/components/data-table/types'

const props = defineProps<{
  action: DataTableAction
  row: Data
}>()
const emits = defineEmits<{
  refreshTableData: [void]
}>()

const show = ref(false)

function handleActionSubmit(isSuccess: boolean) {
  show.value = false
  if (!isSuccess) {
    window.$message.warning('未' + props.action.title)
    return
  }
  window.$message.success(props.action.title + '成功')
  emits('refreshTableData')
}
</script>

<template>
  <n-button @click="show = true">{{ action.title }}</n-button>
  <n-drawer v-if="action.component" v-model:show="show">
    <n-drawer-content :title="action.title">
      <component :is="action.component" :row="row" @action-submit="handleActionSubmit" />
    </n-drawer-content>
  </n-drawer>
</template>
