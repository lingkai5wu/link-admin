import BaseLayout from '@/views/BaseLayout.vue'
import type { RouteRecordRaw } from 'vue-router'

const modules: Record<string, RouteRecordRaw> = import.meta.glob('./modules/*.ts', {
  eager: true,
  import: 'default'
})
console.log(modules)

export default [
  {
    path: '/',
    name: 'layout',
    component: BaseLayout,
    children: Object.values(modules)
  },
  {
    component: () => import('@/views/auth/AuthLayout.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        meta: {
          title: '登录'
        },
        component: () => import('@/views/auth/LoginView.vue')
      }
    ]
  }
] as RouteRecordRaw[]
