<script lang="ts" setup>
import { listAnimalBasicDataVOsWithPage } from '@/api/animal'
import AnimalAdd from '@/components/curd/AnimalAdd.vue'
import AnimalEdit from '@/components/curd/AnimalEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { AnimalBasicInfoVO } from '@/types/api/vo'
import { animalSexEnumConfig, animalStatusEnumConfig, enum2Tag } from '@/utils/enum'
import { type DataTableColumns, NTime } from 'naive-ui'

const columns: DataTableColumns<AnimalBasicInfoVO> = [
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '状态',
    key: 'status',
    render(row) {
      return enum2Tag(animalStatusEnumConfig, row.status)
    }
  },
  {
    title: '品种',
    key: 'breed'
  },
  {
    title: '性别',
    key: 'sex',
    render(row) {
      return enum2Tag(animalSexEnumConfig, row.sex)
    }
  },
  {
    title: '出生日期',
    key: 'dateOfBirth',
    render(row) {
      if (row.dateOfBirth) {
        return h(NTime, { time: row.dateOfBirth, type: 'date' })
      }
    }
  }
]
const rowActions: RowActions<AnimalBasicInfoVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'animal:update',
    component: AnimalEdit
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'animal:save',
    component: AnimalAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listAnimalBasicDataVOsWithPage"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
