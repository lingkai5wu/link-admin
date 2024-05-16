<script lang="ts" setup>
import { listPostBasicVOs, removePost } from '@/api/post'
import PostAdd from '@/components/curd/PostAdd.vue'
import PostEdit from '@/components/curd/PostEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { PostBasicVO } from '@/types/api/vo'
import { entityStatusEnumConfig, enum2Tag } from '@/utils/enum'
import { type DataTableColumns, NTime } from 'naive-ui'
import { useUserStore } from '@/stores/user'

const columns: DataTableColumns<PostBasicVO> = [
  {
    title: '标题',
    key: 'title'
  },
  {
    title: '状态',
    key: 'status',
    render(row) {
      return enum2Tag(entityStatusEnumConfig, row.status)
    }
  },
  {
    title: '创建时间',
    key: 'createTime',
    render(row) {
      return h(NTime, { time: row.createTime, type: 'datetime' })
    }
  },
  {
    title: '更新时间',
    key: 'updateTime',
    render(row) {
      return row.updateTime && h(NTime, { time: row.updateTime, type: 'datetime' })
    }
  }
]
const rowActions: RowActions<PostBasicVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'post:update',
    permissionFunc(row) {
      return row.userId === useUserStore().userVO!.id
    },
    component: PostEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'post:remove',
    needTwoStep: true,
    func: (row) => removePost(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'post:save',
    component: PostAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listPostBasicVOs"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
