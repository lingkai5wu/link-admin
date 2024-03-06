<script lang="ts" setup>
import { listUserVOs } from '@/api/user'
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
</script>

<template>
  <h1>用户管理</h1>
  <DataTable :data-table-props="{ columns: columns }" :func="listUserVOs" />
</template>
