<script lang="ts" setup>
import DataTableActionButtonGroup from '@/components/data-table/DataTableActionButtonGroup.vue'
import type { DataTableActions, DataTablePropsEx } from '@/components/data-table/types'
import type { DataTableColumns } from 'naive-ui'

const props = defineProps<{
  func: () => Promise<Data[]>
  columns: DataTableColumns<any>
  actions?: DataTableActions
  dataTableProps?: DataTablePropsEx
}>()

const loading = ref(false)
const tableData = ref<Data[]>()
getTableData()
const columnsWithActions = ref(props.columns)
setActionColumn()

async function getTableData() {
  loading.value = true
  tableData.value = await props.func()
  loading.value = false
}

function setActionColumn() {
  const actions = props.actions
  if (!actions) {
    return
  }
  columnsWithActions.value.push({
    title: '操作',
    key: 'action',
    render(rowData: Data) {
      return h(DataTableActionButtonGroup, {
        actions: actions,
        row: rowData,
        onRefreshTableData: getTableData
      })
    }
  })
}
</script>

<template>
  <n-data-table
    :columns="columns"
    :data="tableData"
    :loading="loading"
    :row-key="(data: Data) => data.id"
    v-bind="dataTableProps"
  />
</template>
