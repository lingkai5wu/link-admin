import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'animal-category',
  name: 'animal-category',
  meta: {
    title: '动物分类'
  },
  component: () => import('@/views/AnimalCategoryView.vue')
} as RouteRecordRaw
