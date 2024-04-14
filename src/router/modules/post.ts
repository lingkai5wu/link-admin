import type { RouteRecordRaw } from 'vue-router'

export default {
  path: 'post',
  name: 'post',
  meta: {
    title: '帖子管理'
  },
  component: () => import('@/views/PostView.vue')
} as RouteRecordRaw
