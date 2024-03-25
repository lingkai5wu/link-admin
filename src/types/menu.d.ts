import type { MenuVO } from '@/types/api/vo'
import type { TreeOption } from 'naive-ui'
import type { RouteMeta } from 'vue-router'

interface MenuVOTree extends MenuVO {
  meta?: RouteMeta
  children?: MenuVOTree[]
}

interface MenuTreeOption extends TreeOption {
  id: number
  pid: number
  sortOrder: number | null
  children?: MenuTreeOption[]
}
