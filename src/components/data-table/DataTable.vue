<script lang="ts" setup>
import type { DataTableProps } from 'naive-ui'

const props = defineProps<{
  func: () => Promise<Data[]>
  dataTableProps?: DataTableProps
}>()

const loading = ref(false)
const tableData = ref<Data[]>()
getTableData()

async function getTableData() {
  loading.value = true
  tableData.value = await props.func()
  loading.value = false
}
</script>

<template>
  <n-data-table
    :data="tableData"
    :loading="loading"
    :row-key="(data: Data) => data.id"
    v-bind="dataTableProps"
  />
</template>
