<script lang="ts" setup>
import DataTableActionButtonGroup from '@/components/data-table/DataTableActionButtonGroup.vue'
import type {
  DataTableActionComponentProps,
  DataTableActions,
  DataTableActionWithComponent,
  DataTablePropsEx,
  RowDataWithId
} from '@/components/data-table/types'
import type { DataTableColumns } from 'naive-ui'
import type { Component } from 'vue'

const props = defineProps<{
  func: () => Promise<RowDataWithId[]>
  columns: DataTableColumns<any>
  actions?: DataTableActions
  dataTableProps?: DataTablePropsEx
}>()

const loading = ref(false)
const tableData = ref<RowDataWithId[]>()
getTableData()
const columnsWithActions = ref(props.columns)
setActionColumn()
const isDrawerShow = ref(false)
const isDrawerMaskClosable = ref(true)
const drawerTitle = ref<string>()
const component = ref<Component>()
const componentKey = ref<string>()
const componentProps = ref<DataTableActionComponentProps>()

async function getTableData() {
  loading.value = true
  tableData.value = await props.func()
  loading.value = false
}

function setActionColumn() {
  const actions = props.actions
  if (!actions || Object.keys(actions).length === 0) {
    return
  }
  columnsWithActions.value.push({
    title: '操作',
    key: 'action',
    render(row: RowDataWithId) {
      return h(DataTableActionButtonGroup, {
        actions,
        row,
        onActionTrigger: handleActionTrigger,
        onActionSubmit: handleActionSubmit
      })
    }
  })
}

function handleActionTrigger(row: RowDataWithId, action: DataTableActionWithComponent, actionKey: string) {
  component.value = markRaw(action.component)
  componentKey.value = actionKey + row.id
  componentProps.value = { row, tableData: tableData.value!, func: action.func }
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
  <n-drawer
    v-model:show="isDrawerShow"
    :mask-closable="isDrawerMaskClosable"
    display-directive="show"
  >
    <n-drawer-content :title="drawerTitle">
      <keep-alive :max="3">
        <component
          :is="component"
          :key="componentKey"
          v-bind="componentProps"
          @action-submit="handleActionSubmit"
          @action-func-exec="(isFuncExec: boolean) => (isDrawerMaskClosable = !isFuncExec)"
        />
      </keep-alive>
    </n-drawer-content>
  </n-drawer>
</template>
