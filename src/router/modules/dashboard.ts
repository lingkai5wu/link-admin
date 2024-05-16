import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'dashboard',
  name: 'dashboard',
  meta: {
    title: '仪表盘'
  },
  component: () => import('@/views/DashboardView.vue')
} as RouteRecordRaw
