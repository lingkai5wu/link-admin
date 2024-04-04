import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'species',
  name: 'species',
  meta: {
    title: '物种管理'
  },
  component: () => import('@/views/SpeciesView.vue')
} as RouteRecordRaw
