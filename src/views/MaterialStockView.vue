<script lang="ts" setup>
import { listMaterialStockBasicVOs, removeMaterialStock } from '@/api/material-stock'
import type { RowActions } from '@/components/data-table/types'
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
    key: 'current',
    render(row) {
      return h('span', `${row.current} ${row.material.unit}`)
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
  delete: {
    title: '删除',
    type: 'error',
    permission: 'material:stock:remove',
    needTwoStep: true,
    func: (row) => removeMaterialStock(row.id)
  }
}
</script>

<template>
  <DataTable :columns="columns" :func="listMaterialStockBasicVOs" :row-actions="rowActions" />
</template>
