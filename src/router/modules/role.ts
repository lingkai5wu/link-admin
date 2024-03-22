import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'role',
  name: 'role',
  meta: {
    title: '角色管理'
  },
  component: () => import('@/views/RoleView.vue')
} as RouteRecordRaw
