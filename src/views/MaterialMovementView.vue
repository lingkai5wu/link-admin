<script lang="ts" setup>
import { listMaterialMovementBasicVOs, removeMaterialMovement } from '@/api/material-movement'
import MaterialMovementAdd from '@/components/curd/MaterialMovementAdd.vue'
import MaterialMovementEdit from '@/components/curd/MaterialMovementEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { MaterialMovementBasicVO } from '@/types/api/vo'
import { enum2Tag, materialMovementTypeEnumConfig } from '@/utils/enum'
import { type DataTableColumns, NTime } from 'naive-ui'

const columns: DataTableColumns<MaterialMovementBasicVO> = [
  {
    title: '物资名称',
    key: 'materialName'
  },
  {
    title: '仓库',
    key: 'warehouseLabel'
  },
  {
    title: '变动类型',
    key: 'movementType',
    render(row) {
      return enum2Tag(materialMovementTypeEnumConfig, row.movementType)
    }
  },
  {
    title: '变动数量',
    key: 'quantity',
    render(row) {
      return h('span', row.quantity + ' ' + row.materialUnit)
    }
  },
  {
    title: '描述',
    key: 'description'
  },
  {
    title: '时间',
    key: 'createTime',
    render(row) {
      return h(NTime, { time: row.createTime, type: 'datetime' })
    }
  }
]
const rowActions: RowActions<MaterialMovementBasicVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'material:movement:update',
    component: MaterialMovementEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'material:movement:remove',
    needTwoStep: true,
    disabled(row) {
      return row.quantity !== 0
    },
    func: (row) => removeMaterialMovement(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'material:movement:save',
    component: MaterialMovementAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listMaterialMovementBasicVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
