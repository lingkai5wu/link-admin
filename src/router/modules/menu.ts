import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'menu',
  name: 'menu',
  meta: {
    title: '菜单管理'
  },
  component: () => import('@/views/MenuView.vue')
} as RouteRecordRaw
