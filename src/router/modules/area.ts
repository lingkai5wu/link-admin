import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'area',
  name: 'area',
  meta: {
    title: '区域管理'
  },
  component: () => import('@/views/AreaView.vue')
} as RouteRecordRaw
