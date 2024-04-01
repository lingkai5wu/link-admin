<script lang="ts" setup>
import ActionButtonGroup from '@/components/data-table/ActionButtonGroup.vue'
import type {
  ActionComponentProps,
  ActionWithComponent,
  DataTablePropsEx,
  RowActions,
  TopActions
} from '@/components/data-table/types'
import type { PageDTO } from '@/types/api/query'
import type { PageVO } from '@/types/api/vo'
import { getAuthorizedActions } from '@/utils/permission'
import { RefreshOutline } from '@vicons/ionicons5'
import type { DataTableColumns } from 'naive-ui'
import type { Component } from 'vue'

const props = defineProps<{
  func: (pageDTO?: PageDTO, query?: object) => Promise<DataWithId[] | PageVO<DataWithId>>
  columns: DataTableColumns<any>
  rowActions?: RowActions
  topActions?: TopActions
  dataTableProps?: DataTablePropsEx
}>()

const loading = ref(false)
const tableData = ref<DataWithId[]>()
const pagination = ref({
  page: 1,
  pageSize: 10,
  itemCount: 0
})
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

async function getTableData(query?: object) {
  loading.value = true
  let data
  try {
    data = await props.func(pageDTO.value, query)
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
  if (!props.rowActions) {
    return
  }
  const actions = getAuthorizedActions(props.rowActions)
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

function handlePageChange(page: number) {
  pagination.value.page = page
  pagination.value.itemCount > 0 && getTableData()
}

function handleActionTrigger(
  row: DataWithId | undefined,
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
    <n-flex justify="space-between">
      <ActionButtonGroup
        :actions="getAuthorizedActions(topActions)"
        :flex-props="{}"
        @action-trigger="handleActionTrigger"
        @action-submit="handleActionSubmit"
      />
      <LoadingButton :func="getTableData" secondary>
        <template #icon>
          <RefreshOutline />
        </template>
      </LoadingButton>
    </n-flex>
    <n-data-table
      :columns
      :data="tableData"
      :loading
      :pagination
      :remote="pagination.itemCount > 0"
      :row-key="(data: Data) => data.id"
      :scroll-x="640"
      v-bind="dataTableProps"
      @update:filters="getTableData"
      @update:page="handlePageChange"
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
