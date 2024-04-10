import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'material',
  children: [
    {
      path: 'category',
      name: 'material-category',
      meta: {
        title: '物资分类'
      },
      component: () => import('@/views/MaterialCategoryView.vue')
    }
  ]
} as RouteRecordRaw
