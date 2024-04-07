import type { MenuVO } from '@/types/api/vo'
import type { TreeOption } from 'naive-ui'
import type { RouteMeta } from 'vue-router'

interface MenuVOTree extends MenuVO {
  meta?: RouteMeta
  children?: MenuVOTree[]
}

interface RowEntityTreeNode {
  id: number
  pid: number
}

type EntityTreeNode<T> = T & {
  children?: EntityTreeNode<T>[]
}

type EntityTreeOption<T> = T &
  TreeOption & {
    children?: EntityTreeOption<T>[]
  }
