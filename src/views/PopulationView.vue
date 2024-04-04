<script lang="ts" setup>
import { listPopulationInfoVOs, removePopulation } from '@/api/population'
import PopulationAdd from '@/components/curd/PopulationAdd.vue'
import PopulationEdit from '@/components/curd/PopulationEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { PopulationInfoVO } from '@/types/api/vo'
import { type DataTableColumns } from 'naive-ui'

const columns: DataTableColumns<PopulationInfoVO> = [
  {
    title: '标签',
    key: 'label'
  },
  {
    title: '物种',
    key: 'species'
  },
  {
    title: '区域',
    key: 'area'
  },
  {
    title: '描述',
    key: 'description'
  }
]
const rowActions: RowActions<PopulationInfoVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'population:update',
    component: PopulationEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'population:remove',
    needTwoStep: true,
    func: (row) => removePopulation(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'population:save',
    component: PopulationAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listPopulationInfoVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
