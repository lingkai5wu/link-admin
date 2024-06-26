import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'material',
  children: [
    {
      path: '',
      name: 'category',
      meta: {
        title: '物资项'
      },
      component: () => import('@/views/MaterialView.vue')
    },
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
    },
    {
      path: 'stock',
      name: 'material-stock',
      meta: {
        title: '物资库存'
      },
      component: () => import('@/views/MaterialStockView.vue')
    },
    {
      path: 'movement',
      name: 'material-movement',
      meta: {
        title: '出入库记录'
      },
      component: () => import('@/views/MaterialMovementView.vue')
    }
  ]
} as RouteRecordRaw
