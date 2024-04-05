<script lang="ts" setup>
import { listForumVOs, removeForum } from '@/api/forum'
import ForumAdd from '@/components/curd/ForumAdd.vue'
import ForumEdit from '@/components/curd/ForumEdit.vue'
import ForumSort from '@/components/curd/ForumSort.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { ForumVO } from '@/types/api/vo'
import type { EntityTree } from '@/types/tree'
import { generateEntityTrees } from '@/utils/tree'
import type { DataTableColumns } from 'naive-ui'

const columns: DataTableColumns<EntityTree<ForumVO>> = [
  {
    title: '标签',
    key: 'label'
  },
  {
    title: '描述',
    key: 'description'
  }
]
const rowActions: RowActions<EntityTree<ForumVO>> = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'forum:save',
    component: ForumAdd
  },
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
    disabled(row) {
      return row.children !== undefined
    },
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
    :func="async () => generateEntityTrees(await listForumVOs())"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
