import type { MenuVO } from '@/types/api/vo'
import type { TreeOption } from 'naive-ui'
import type { RouteMeta } from 'vue-router'

interface MenuVOTree extends MenuVO {
  meta?: RouteMeta
  children?: MenuVOTree[]
}

interface EntityTreeNode {
  id: number
  pid: number
}

interface EntityTree<T extends EntityTreeNode> extends T {
  children?: EntityTree<T>[]
}

interface EntityTreeOption<T extends EntityTreeNode> extends T, TreeOption {
  children?: EntityTreeOption<T>[]
}

type SortableEntityTreeOption = EntityTreeOption<SortableEntity>
