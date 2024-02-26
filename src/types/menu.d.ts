import type { MenuOptionSharedPart } from 'naive-ui/es/menu/src/interface'
import type { RouteMeta } from 'vue-router'

type MenuOptionWithRouteMeta = MenuOptionSharedPart & {
  meta?: RouteMeta
}
