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
  }
] as RouteRecordRaw[]
