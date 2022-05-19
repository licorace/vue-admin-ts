import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import localCache from "@/utils/cache"
import { firstMenu } from "@/utils/map-menus"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main.vue")
    //children:[] -> 根据userMenus来决定 -> children
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found/not-found.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

//导航守卫
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getCache("token")
    if (!token) {
      return "/login"
    }
  }

  // console.log(router.getRoutes())
  // console.log(to)

  if (to.path.indexOf("/main") !== -1) {
    if (to.name === "not-found") {
      to.name = "yyds"
    }
  }

  if (to.path === "/main") {
    // console.log(firstMenu)
    return firstMenu.url
  }
})

export default router
