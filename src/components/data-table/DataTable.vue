<script lang="ts" setup>
import ActionButtonGroup from '@/components/data-table/ActionButtonGroup.vue'
import type {
  ActionComponentProps,
  ActionWithComponent,
  DataTablePropsEx,
  RowActions,
  RowDataWithId,
  TopActions
} from '@/components/data-table/types'
import type { PageDTO } from '@/types/api/query'
import type { PageVO } from '@/types/api/vo'
import type { DataTableColumns, PaginationProps } from 'naive-ui'
import type { Component } from 'vue'

const props = defineProps<{
  func: (pageDTO?: PageDTO) => Promise<RowDataWithId[] | PageVO<RowDataWithId>>
  columns: DataTableColumns<any>
  rowActions?: RowActions<any>
  topActions?: TopActions
  dataTableProps?: DataTablePropsEx
}>()

const loading = ref(false)
const tableData = ref<RowDataWithId[]>()
const pagination = ref<PaginationProps>()
const pageDTO = computed<PageDTO>(() => ({
  current: pagination.value?.page,
  size: pagination.value?.pageSize
}))
getTableData()
const columnsWithActions = ref(props.columns)
setActionColumn()
const isDrawerShow = ref(false)
const isDrawerMaskClosable = ref(true)
const drawerTitle = ref<string>()
const component = ref<Component>()
const componentKey = ref<string>()
const componentProps = ref<ActionComponentProps>()

async function getTableData() {
  loading.value = true
  let data
  try {
    data = await props.func(pageDTO.value)
  } finally {
    loading.value = false
  }
  if (Array.isArray(data)) {
    tableData.value = data
    return
  }
  pagination.value = {
    page: data.current,
    pageSize: data.size,
    itemCount: data.total
  }
  tableData.value = data.records
}

function setActionColumn() {
  const actions = props.rowActions
  if (!actions || Object.keys(actions).length === 0) {
    return
  }
  columnsWithActions.value.push({
    title: '操作',
    key: 'action',
    render(row) {
      return h(ActionButtonGroup, {
        actions,
        row,
        onActionTrigger: handleActionTrigger,
        onActionSubmit: handleActionSubmit
      })
    }
  })
}

function handlePageChange(current: number) {
  pagination.value!.page = current
  getTableData()
}

function handleActionTrigger(
  row: RowDataWithId | undefined,
  action: ActionWithComponent,
  actionKey: string
) {
  component.value = markRaw(action.component)
  componentKey.value = actionKey + row?.id
  if (row) {
    componentProps.value = { row }
  }
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
  <n-flex vertical>
    <ActionButtonGroup
      v-if="topActions"
      :actions="topActions"
      :flex-props="{}"
      @action-trigger="handleActionTrigger"
      @action-submit="handleActionSubmit"
    />
    <n-data-table
      :columns
      :data="tableData"
      :loading
      :pagination
      :row-key="(data: Data) => data.id"
      :scroll-x="640"
      remote
      v-bind="dataTableProps"
      @page-change="handlePageChange"
    />
  </n-flex>
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
