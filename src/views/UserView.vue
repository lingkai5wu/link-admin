<script lang="ts" setup>
import { listUserVOs } from '@/api/user'
import UserEdit from '@/components/curd/UserEdit.vue'
import UserRoleEdit from '@/components/curd/UserRoleEdit.vue'
import type { DataTableActions } from '@/components/data-table/types'
import type { UserVO } from '@/types/api/vo'
import { enum2Tag, userSexEnumConfig, userStatusEnumConfig } from '@/utils/enum'
import { type DataTableColumns } from 'naive-ui'

const columns: DataTableColumns<UserVO> = [
  {
    title: '手机号',
    key: 'phone'
  },
  {
    title: '状态',
    key: 'status',
    render(row) {
      return enum2Tag(userStatusEnumConfig, row.status)
    }
  },
  {
    title: '昵称',
    key: 'nickname'
  },
  {
    title: '姓名',
    key: 'realname'
  },
  {
    title: '性别',
    key: 'sex',
    render(row) {
      return enum2Tag(userSexEnumConfig, row.sex)
    }
  },
  {
    title: '创建时间',
    key: 'createTime'
  }
]
const actions: DataTableActions<UserVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    component: UserEdit
  },
  roleEdit: {
    title: '角色',
    component: UserRoleEdit
  }
}
</script>

<template>
  <DataTable :actions="actions" :columns="columns" :func="listUserVOs" />
</template>
