import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'user',
  name: 'user',
  component: () => import('@/views/UserView.vue')
} as RouteRecordRaw
