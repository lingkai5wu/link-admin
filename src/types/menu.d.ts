import type { MenuVO } from '@/types/api/vo'
import type { RouteMeta } from 'vue-router'

interface MenuVOTree extends MenuVO {
  meta?: RouteMeta
  children?: MenuVOTree[]
}
