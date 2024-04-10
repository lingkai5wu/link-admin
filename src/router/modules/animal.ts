import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'animal',
  children: [
    {
      path: '',
      name: 'animal',
      meta: {
        title: '动物管理'
      },
      component: () => import('@/views/AnimalView.vue')
    },
    {
      path: 'category',
      name: 'animal-category',
      meta: {
        title: '动物分类'
      },
      component: () => import('@/views/AnimalCategoryView.vue')
    }
  ]
} as RouteRecordRaw
