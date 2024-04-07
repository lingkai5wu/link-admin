<script lang="ts" setup>
import { listForumBasicVOs, removeForum } from '@/api/forum'
import ForumAdd from '@/components/curd/ForumAdd.vue'
import ForumEdit from '@/components/curd/ForumEdit.vue'
import ForumSort from '@/components/curd/ForumSort.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { ForumBasicVO } from '@/types/api/vo'
import { entityStatusEnumConfig, enum2Tag } from '@/utils/enum'
import { type DataTableColumns, NTime } from 'naive-ui'

const columns: DataTableColumns<ForumBasicVO> = [
  {
    title: '标签',
    key: 'label'
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
    title: '描述',
    key: 'description'
  },
  {
    title: '创建时间',
    key: 'createTime',
    render(row) {
      return h(NTime, { time: row.createTime, type: 'date' })
    }
  }
]
const rowActions: RowActions<ForumBasicVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'forum:update',
    component: ForumEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'forum:remove',
    needTwoStep: true,
    func: (row) => removeForum(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'forum:save',
    component: ForumAdd
  },
  sort: {
    title: '修改顺序',
    type: 'warning',
    permission: 'forum:update',
    component: ForumSort
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listForumBasicVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
