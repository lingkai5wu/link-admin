import type { MenuVO } from '@/types/api/vo'
import type { MenuOption } from 'naive-ui/es/menu/src/interface'
import type { RouteMeta } from 'vue-router'

type MenuOptionWithEx = MenuVO &
  MenuOption & {
    meta?: RouteMeta
  }
