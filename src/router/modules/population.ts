import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'population',
  name: 'population',
  meta: {
    title: '种群管理'
  },
  component: () => import('@/views/PopulationView.vue')
} as RouteRecordRaw
