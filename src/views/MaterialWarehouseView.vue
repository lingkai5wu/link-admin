<script lang="ts" setup>
import { listMaterialWarehouseBasicVOs, removeMaterialWarehouse } from '@/api/material-warehouse'
import MaterialWarehouseAdd from '@/components/curd/MaterialWarehouseAdd.vue'
import MaterialWarehouseEdit from '@/components/curd/MaterialWarehouseEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import UserBasicInfo from '@/components/UserBasicInfo.vue'
import type { MaterialWarehouseBasicVO } from '@/types/api/vo'
import { type DataTableColumns } from 'naive-ui'

const columns: DataTableColumns<MaterialWarehouseBasicVO> = [
  {
    title: '标签',
    key: 'label'
  },
  {
    title: '描述',
    key: 'description'
  },
  {
    title: '保管用户',
    key: 'keeperUser',
    render: ({ keeperUser }) => h(UserBasicInfo, { userBasic: keeperUser })
  },
  {
    title: '联系方式',
    key: 'contact'
  }
]
const rowActions: RowActions<MaterialWarehouseBasicVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'material:warehouse:update',
    component: MaterialWarehouseEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'material:warehouse:remove',
    needTwoStep: true,
    func: (row) => removeMaterialWarehouse(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'material:warehouse:save',
    component: MaterialWarehouseAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listMaterialWarehouseBasicVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
