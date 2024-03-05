import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'menu',
  name: 'menu',
  component: () => import('@/views/MenuView.vue')
} as RouteRecordRaw
