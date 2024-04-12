<script lang="ts" setup>
import { listMaterialBasicVOs, removeMaterial } from '@/api/material'
import MaterialAdd from '@/components/curd/MaterialAdd.vue'
import MaterialEdit from '@/components/curd/MaterialEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { MaterialBasicVO } from '@/types/api/vo'
import { entityStatusEnumConfig, enum2Tag } from '@/utils/enum'
import { type DataTableColumns } from 'naive-ui'

const columns: DataTableColumns<MaterialBasicVO> = [
  {
    title: '分类',
    key: 'category'
  },
  {
    title: '状态',
    key: 'status',
    render(row) {
      return enum2Tag(entityStatusEnumConfig, row.status)
    },
    filter: true,
    filterMultiple: false,
    filterOptions: entityStatusEnumConfig
  },
  {
    title: '名称',
    key: 'name'
  },
  {
    title: '规格',
    key: 'specification'
  },
  {
    title: '单位',
    key: 'unit'
  }
]
const rowActions: RowActions<MaterialBasicVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'material:category:update',
    component: MaterialEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'material:category:remove',
    needTwoStep: true,
    func: (row) => removeMaterial(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'material:category:save',
    component: MaterialAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listMaterialBasicVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
