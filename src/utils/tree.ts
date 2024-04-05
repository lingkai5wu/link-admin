import type { EntityTree, EntityTreeNode, EntityTreeOption } from '@/types/tree'
import { pick } from '@/utils/data'

export function generateEntityTrees<T extends EntityTreeNode>(entities: T[], pid = 0) {
  return entities
    .filter((entity) => entity.pid === pid)
    .map((entity) => {
      const current: EntityTree<T> = { ...entity }
      const children = generateEntityTrees(entities, entity.id)
      if (children.length > 0) {
        current.children = children
      }
      return current
    })
}

export function generateEntityTreeOptions<T extends EntityTreeNode>(
  entities: T[],
  keys: Exclude<keyof T, 'children'>[],
  alwaysIncludeChildren: ((node: T) => boolean) | boolean = false,
  excludeNode?: (node: T) => boolean
) {
  function generate(entities: T[], pid: number) {
    return entities
      .filter((entity) => entity.pid === pid && (excludeNode ? !excludeNode(entity) : true))
      .map((entity) => {
        const current: EntityTreeOption<Pick<T, Exclude<keyof T, 'children'>>> = pick(entity, keys)
        const children = generate(entities, entity.id)
        if (
          children.length > 0 ||
          (typeof alwaysIncludeChildren === 'boolean' && alwaysIncludeChildren) ||
          (typeof alwaysIncludeChildren === 'function' && alwaysIncludeChildren(entity))
        ) {
          current.children = children
        }
        return current
      })
  }

  return generate(entities, 0)
}
