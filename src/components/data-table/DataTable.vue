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
  actions?: DataTableActions<any>
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
    render(row) {
      return h(DataTableActionButtonGroup, {
        actions,
        row,
        onActionTrigger: handleActionTrigger,
        onActionSubmit: handleActionSubmit
      })
    }
  })
}

function handleActionTrigger(
  row: RowDataWithId,
  action: DataTableActionWithComponent,
  actionKey: string
) {
  component.value = markRaw(action.component)
  componentKey.value = actionKey + row.id
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
    :scroll-x="640"
    v-bind="dataTableProps"
  />
  <n-drawer
    v-model:show="isDrawerShow"
    :mask-closable="isDrawerMaskClosable"
    style="width: 408px; max-width: 100vw; border-radius: 0"
  >
    <n-drawer-content :title="drawerTitle" closable>
      <component
        :is="component"
        :key="componentKey"
        v-bind="componentProps"
        @action-submit="handleActionSubmit"
        @action-func-exec="(isFuncExec: boolean) => (isDrawerMaskClosable = !isFuncExec)"
      />
    </n-drawer-content>
  </n-drawer>
</template>
