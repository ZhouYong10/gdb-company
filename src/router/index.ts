import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import layout from "@/layout";
import { Component } from "vue-property-decorator";
import MenuGroup from "@/models/MenuGroup";
import {menuGroups} from "@/store";

Vue.use(VueRouter);
Component.registerHooks([
  "beforeRouteEnter",
  "beforeRouteUpdate",
  "beforeRouteLeave"
]);

const constRoutes: RouteConfig[] = [
  {
    path: "/",
    component: layout.normal,
    children: [
      {
        path: "",
        component: () => import("@/views/home.vue")
      }
    ]
  },
  {
    path: "/webPage",
    component: layout.normal,
    children: [
      {
        path: ":url*",
        component: () => import("@/views/webPage/index.vue"),
        meta: { title: "页面丢失了" }
      }
    ]
  },
  {
    path: "*",
    component: () => import("@/views/fourOfour/index.vue")
  }
];

const router = createRouter(menuGroups);

function createRouter(menuGroups: Array<MenuGroup>) {
  let routeConfigs = constRoutes.slice();
  routeConfigs.forEach(routeConfig => {
    if (routeConfig.path === "/") {
      routeConfig.children = routeConfig.children || [];
      routeConfig.children = routeConfig.children.concat(parseToRoutes(menuGroups));
    }
  });
  return new VueRouter({
    mode: "hash",
    routes: routeConfigs
  });
}

function parseToRoutes(menuGroups: Array<MenuGroup>) {
  let routesConfig: RouteConfig[] = [];
  menuGroups.forEach(menuGroup => {
    let menus = menuGroup.menus;
    menus.forEach(menu => {
      if (menu.path.indexOf("webPage") === -1) {
        let routeConfig = {
          path: menu.path,
          component: () => import(`@/views/${menu.path}/index.vue`),
          children: [],
          meta: { title: `${menuGroup.name}/${menu.name}` }
        };
        routesConfig.push(routeConfig);
      }
    });
  });
  return routesConfig;
}

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter(menuGroups: Array<MenuGroup>) {
  const newRouter = createRouter(menuGroups);
  (router as any).matcher = (newRouter as any).matcher;
}

export default router;
