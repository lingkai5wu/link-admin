import router from '@/router'
import type { MenuVO } from '@/types/api/vo'
import type { MenuVOTree } from '@/types/menu'

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
