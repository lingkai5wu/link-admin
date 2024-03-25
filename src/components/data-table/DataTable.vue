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
import type { DataTableColumns } from 'naive-ui'
import type { Component } from 'vue'

const props = defineProps<{
  func: () => Promise<RowDataWithId[]>
  columns: DataTableColumns<any>
  rowActions?: RowActions<any>
  topActions?: TopActions
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
const componentProps = ref<ActionComponentProps>()

async function getTableData() {
  loading.value = true
  try {
    tableData.value = await props.func()
  } finally {
    loading.value = false
  }
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
    <slot />
    <ActionButtonGroup
      v-if="topActions"
      :actions="topActions"
      @action-trigger="handleActionTrigger"
      @action-submit="handleActionSubmit"
    />
    <n-data-table
      :columns="columns"
      :data="tableData"
      :loading="loading"
      :row-key="(data: Data) => data.id"
      :scroll-x="640"
      v-bind="dataTableProps"
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
