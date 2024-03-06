import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'user',
  name: 'user',
  meta: {
    title: '用户管理'
  },
  component: () => import('@/views/UserView.vue')
} as RouteRecordRaw
