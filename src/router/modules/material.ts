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
    },
    {
      path: 'warehouse',
      name: 'material-warehouse',
      meta: {
        title: '物资仓库'
      },
      component: () => import('@/views/MaterialWarehouseView.vue')
    }
  ]
} as RouteRecordRaw
