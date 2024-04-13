<script lang="ts" setup>
import { listMaterialStockBasicVOs, removeMaterialStock } from '@/api/material-stock'
import MaterialStockAdd from '@/components/curd/MaterialStockAdd.vue'
import MaterialStockEdit from '@/components/curd/MaterialStockEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { MaterialStockBasicVO } from '@/types/api/vo'
import { type DataTableColumns } from 'naive-ui'

const columns: DataTableColumns<MaterialStockBasicVO> = [
  {
    title: '物资名称',
    key: 'material.name'
  },
  {
    title: '仓库',
    key: 'warehouse'
  },
  {
    title: '联系方式',
    key: 'contact'
  },
  {
    title: '数量',
    key: 'quantity',
    render(row) {
      return h('span', `${row.quantity} ${row.material.unit}`)
    }
  },
  {
    title: '理想库存范围',
    key: 'range',
    render(row) {
      return h('span', `${row.min} ~ ${row.max} ${row.material.unit}`)
    }
  }
]
const rowActions: RowActions<MaterialStockBasicVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'material:stock:update',
    component: MaterialStockEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'material:stock:remove',
    needTwoStep: true,
    disabled(row) {
      return row.quantity !== 0
    },
    func: (row) => removeMaterialStock(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'material:stock:save',
    component: MaterialStockAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listMaterialStockBasicVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
