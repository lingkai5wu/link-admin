<script lang="ts" setup>
import { listSpeciesVOs, removeSpecies } from '@/api/species'
import SpeciesAdd from '@/components/curd/SpeciesAdd.vue'
import SpeciesEdit from '@/components/curd/SpeciesEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { SpeciesVO } from '@/types/api/vo'
import { type DataTableColumns } from 'naive-ui'

const columns: DataTableColumns<SpeciesVO> = [
  {
    title: '标签',
    key: 'label'
  },
  {
    title: '描述',
    key: 'description'
  }
]
const rowActions: RowActions<SpeciesVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'species:update',
    component: SpeciesEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'species:remove',
    needTwoStep: true,
    func: (row) => removeSpecies(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'species:save',
    component: SpeciesAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listSpeciesVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
