import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'hello',
  component: () => import('@/views/HelloView.vue')
} as RouteRecordRaw
