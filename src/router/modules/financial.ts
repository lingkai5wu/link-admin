import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'financial',
  children: [
    {
      path: 'transaction',
      children: [
        {
          path: 'category',
          name: 'financial-transaction-category',
          meta: {
            title: '收支分类'
          },
          component: () => import('@/views/FinancialTransactionCategoryView.vue')
        }
      ]
    }
  ]
} as RouteRecordRaw
