<script lang="ts" setup>
import { listAnimalBasicDataVOsWithPage } from '@/api/animal'
import type { RowActions } from '@/components/data-table/types'
import type { AnimalBasicInfoVO, PermissionVO } from '@/types/api/vo'
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
        return h(NTime, { time: new Date(row.dateOfBirth), type: 'date' })
      }
    }
  },
  {
    title: '特征',
    key: 'feature'
  }
]
const rowActions: RowActions<PermissionVO> = {}
</script>

<template>
  <DataTable :columns="columns" :func="listAnimalBasicDataVOsWithPage" :row-actions="rowActions" />
</template>
