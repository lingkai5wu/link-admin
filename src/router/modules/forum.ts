import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'forum',
  name: 'forum',
  meta: {
    title: '板块管理'
  },
  component: () => import('@/views/ForumView.vue')
} as RouteRecordRaw
