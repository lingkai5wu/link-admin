import router from '@/router'
import type { MenuVO } from '@/types/api/vo'
import type { MenuVOTree } from '@/types/menu'
import type { TreeOption } from 'naive-ui/lib'

export function generateMenuVOTrees(menuVOs: MenuVO[]) {
  const routes = router.getRoutes()

  function build(menuVOs: MenuVO[], pid: number) {
    return menuVOs
      .filter((menuVO) => menuVO.pid === pid)
      .map((menuVO) => {
        const current: MenuVOTree = { ...menuVO }
        const route = routes.find((route) => route.path === menuVO.path)
        if (route && route.meta) {
          current.meta = route.meta
        }
        const children = build(menuVOs, menuVO.id)
        if (children.length > 0) {
          current.children = children
        }
        return current
      })
  }

  return build(menuVOs, 0)
}

export function generateTreeOptions(menuVOs: MenuVO[], pid = 0) {
  return menuVOs
    .filter((menuVO) => menuVO.pid === pid)
    .map((menuVO) => {
      const current: TreeOption = {
        key: menuVO.id,
        label: menuVO.label
      }
      const children = generateTreeOptions(menuVOs, menuVO.id)
      if (children.length > 0) {
        current.children = children
      }
      return current
    })
}