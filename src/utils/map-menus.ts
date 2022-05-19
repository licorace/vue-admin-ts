import { IBreadcrumb } from "@/base-ui/breadcrumb"
import { RouteRecordRaw } from "vue-router"

let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //1.先去默认加载所有routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context("../router/main", true, /\.ts/)
  // console.log(routeFiles.keys())
  routeFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1])
    // console.log(route.default)
    allRoutes.push(route.default)
  })

  //2.根据菜单获取需要添加的routes
  //userMenus:
  //type === 1 -> children
  //type === 2 -> url -> route

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      // console.log(menu)
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
        if (!firstMenu) {
          firstMenu = menu
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  // console.log(routes)

  return routes
}

export function pathMapBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

// /main/system/role  -> type === 2 对应menu
export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        // breadcrumbs?.push({ name: menu.name, path: menu.path })
        breadcrumbs?.push({ name: menu.name })
        // breadcrumbs?.push({ name: findMenu.name, path: findMenu.path })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 3) {
        permissions.push(menu.permission)
      } else {
        _recurseGetPermission(menu.children ?? [])
      }
    }
  }

  _recurseGetPermission(userMenus)

  return permissions
}

export function menuMapLeafKeys(menuList: any[]) {
  const leftKeys: number[] = []
  const _recurseGetLeftKeys = (menuList: any[]) => {
    for (const menu of menuList) {
      if (menu.children) {
        _recurseGetLeftKeys(menu.children)
      } else {
        leftKeys.push(menu.id)
      }
    }
  }
  _recurseGetLeftKeys(menuList)

  return leftKeys
}

export { firstMenu }
