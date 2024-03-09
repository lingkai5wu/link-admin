<script lang="ts" setup>
import { listUserVOs } from '@/api/user'
import type { DataTableActions } from '@/components/data-table/types'
import type { UserVO } from '@/types/api/vo'
import type { DataTableColumns } from 'naive-ui'

const columns = ref<DataTableColumns<UserVO>>([
  {
    title: '手机号',
    key: 'phone'
  },
  {
    title: '性别',
    key: 'sex'
  },
  {
    title: '状态',
    key: 'status'
  },
  {
    title: '创建时间',
    key: 'createTime'
  }
])
const actions = ref<DataTableActions>({
  // view: {
  //   title: '查看'
  // },
  // add: {
  //   title: '新增'
  // },
  // edit: {
  //   title: '修改'
  // },
  // delete: {
  //   title: '删除'
  // }
})
</script>

<template>
  <DataTable :actions="actions" :columns="columns" :func="listUserVOs" />
</template>
