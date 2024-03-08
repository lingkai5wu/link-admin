<script lang="ts" setup>
import DataTableActionButtonGroup from '@/components/data-table/DataTableActionButtonGroup.vue'
import type {
  DataTableAction,
  DataTableActionComponentProps,
  DataTableActions,
  DataTablePropsEx
} from '@/components/data-table/types'
import type { DataTableColumns } from 'naive-ui'
import type { Component } from 'vue'

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
const isDrawerShow = ref(false)
const drawerTitle = ref<string>()
const component = ref<Component>()
const componentId = ref<number>()
const componentProps = ref<DataTableActionComponentProps>()

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
        onActionTrigger: handleActionTrigger
      })
    }
  })
}

function handleActionTrigger(action: DataTableAction, row: Data) {
  component.value = markRaw(action.component!)
  componentId.value = row.id
  componentProps.value = { row }
  drawerTitle.value = action.title
  isDrawerShow.value = true
}

function handleActionSubmit(isNeedRefresh: boolean) {
  if (isNeedRefresh) {
    getTableData()
  }
  window.$message.success('操作成功')
  isDrawerShow.value = false
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
  <n-drawer v-model:show="isDrawerShow" display-directive="show">
    <n-drawer-content :title="drawerTitle">
      <keep-alive :max="3">
        <component
          :is="component"
          :key="componentId"
          v-bind="componentProps"
          @action-submit="handleActionSubmit"
        />
      </keep-alive>
    </n-drawer-content>
  </n-drawer>
</template>
