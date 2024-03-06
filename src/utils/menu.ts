import router from '@/router'
import type { MenuVO } from '@/types/api/vo'
import type { MenuOptionWithEx } from '@/types/menu'

export function generateMenuOptions(menus: MenuVO[]) {
  const routes = router.getRoutes()

  function buildMenuOptions(menus: MenuVO[], pid: number) {
    const menuOptions: MenuOptionWithEx[] = []
    for (const menu of menus) {
      if (menu.pid === pid) {
        const menuOption: MenuOptionWithEx = { ...menu }
        const route = routes.find((route) => route.path === menu.path)
        if (route && route.meta) {
          menuOption.meta = route.meta
        }
        const children = buildMenuOptions(menus, menu.id)
        if (children.length > 0) {
          menuOption.children = children
        }
        menuOptions.push(menuOption)
      }
    }
    return menuOptions
  }

  return buildMenuOptions(menus, 0)
}
