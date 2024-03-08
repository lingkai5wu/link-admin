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

function handleActionSuccess() {
  show.value = false
  window.$message.success(props.action.title + '成功')
  emits('refreshTableData')
}
</script>

<template>
  <n-button @click="show = true">{{ action.title }}</n-button>
  <n-drawer v-if="action.component" v-model:show="show">
    <n-drawer-content :title="action.title">
      <component :is="action.component" :row="row" @action-success="handleActionSuccess" />
    </n-drawer-content>
  </n-drawer>
</template>
