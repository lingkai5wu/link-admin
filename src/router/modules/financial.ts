import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'financial',
  children: [
    {
      path: 'account',
      name: 'financial-account',
      meta: {
        title: '资金账户'
      },
      component: () => import('@/views/FinancialAccountView.vue')
    },
    {
      path: 'transaction',
      name: 'financial-transaction',
      meta: {
        title: '收支明细'
      },
      component: () => import('@/views/FinancialTransactionView.vue')
    },
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
