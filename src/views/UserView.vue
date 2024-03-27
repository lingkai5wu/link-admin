<script lang="ts" setup>
import { listUserVOsWithPage, removeUser } from '@/api/user'
import UserAdd from '@/components/curd/UserAdd.vue'
import UserEdit from '@/components/curd/UserEdit.vue'
import UserRoleEdit from '@/components/curd/UserRoleEdit.vue'
import type { RowActions, TopActions } from '@/components/data-table/types'
import type { UserVO } from '@/types/api/vo'
import { enum2Tag, userSexEnumConfig, userStatusEnumConfig } from '@/utils/enum'
import { type DataTableColumns, NTime } from 'naive-ui'

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
    },
    filter: true,
    filterMultiple: false,
    filterOptions: userStatusEnumConfig
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
    },
    filter: true,
    filterMultiple: false,
    filterOptions: userSexEnumConfig
  },
  {
    title: '注册日期',
    key: 'createTime',
    render(row) {
      return h(NTime, { time: new Date(row.createTime), type: 'date' })
    }
  }
]
const rowActions: RowActions<UserVO> = {
  edit: {
    title: '修改',
    type: 'warning',
    permission: 'user:update',
    component: UserEdit
  },
  roleEdit: {
    title: '角色',
    permission: ['user:update', 'role:update'],
    component: UserRoleEdit
  },
  delete: {
    title: '删除',
    type: 'error',
    permission: 'user:remove',
    func: (row) => removeUser(row.id)
  }
}
const topActions: TopActions = {
  add: {
    title: '新增',
    type: 'primary',
    permission: 'user:save',
    component: UserAdd
  }
}
</script>

<template>
  <DataTable
    :columns="columns"
    :func="listUserVOsWithPage"
    :row-actions="rowActions"
    :top-actions="topActions"
  />
</template>
