import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'permission',
  name: 'permission',
  meta: {
    title: '权限管理'
  },
  component: () => import('@/views/PermissionView.vue')
} as RouteRecordRaw
