import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'animal',
  name: 'animal',
  meta: {
    title: '动物管理'
  },
  component: () => import('@/views/AnimalView.vue')
} as RouteRecordRaw
