import type { MenuVO } from '@/types/api/vo'
import type { RouteMeta } from 'vue-router'

type MenuOptionWithEx = MenuVO &
  MenuOption & {
    meta?: RouteMeta
  }
