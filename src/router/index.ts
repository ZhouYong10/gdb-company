import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import views from "@/views";
import layout from "@/layout";
import Menu from "@/models/Menu";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: layout.normal,
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Home.vue")
      }
    ]
  },
  {
    path: "/dataBord",
    name: "dataBord",
    component: layout.normal,
    children: [
      {
        path: "",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/dataBord/index.vue")
      }
    ]
  },
  {
    path: "/projectOverview",
    name: "projectOverview",
    component: layout.normal,
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projectOverview/index.vue"
          )
      }
    ]
  },
  {
    path: "/laborManagement",
    name: "laborManagement",
    component: layout.normal,
    children: [
      {
        path: "people",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/laborManagement/people/index.vue"
          )
      },
      {
        path: "attendance",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/laborManagement/attendance/index.vue"
          )
      },
      {
        path: "jobEvaluation",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/laborManagement/jobEvaluation/index.vue"
          )
      },
      {
        path: "staffQuery",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/laborManagement/staffQuery/index.vue"
          )
      },
      {
        path: "equipment",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/laborManagement/equipment/index.vue"
          )
      }
    ]
  },
  {
    path: "/dustMonitoring",
    name: "dustMonitoring",
    component: layout.normal,
    children: [
      {
        path: "realtimeData",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/dustMonitoring/realtimeData/index.vue"
          )
      },
      {
        path: "historyData",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/dustMonitoring/historyData/index.vue"
          )
      },
      {
        path: "equipment",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/dustMonitoring/equipment/index.vue"
          )
      }
    ]
  },
  {
    path: "/videoSurveillance",
    name: "videoSurveillance",
    component: layout.normal,
    children: [
      {
        path: "realtimeMonitoring",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/videoSurveillance/realtimeMonitoring/index.vue"
          )
      },
      {
        path: "historyPlayback",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/videoSurveillance/historyPlayback/index.vue"
          )
      },
      {
        path: "equipment",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/videoSurveillance/equipment/index.vue"
          )
      }
    ]
  },
  {
    path: "/towerManagement",
    name: "towerManagement",
    component: layout.normal,
    children: [
      {
        path: "equipment",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/towerManagement/equipment/index.vue"
          )
      },
      {
        path: "boxMonitoring",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/towerManagement/boxMonitoring/index.vue"
          )
      },
      {
        path: "boxEquipment",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/towerManagement/boxEquipment/index.vue"
          )
      }
    ]
  },
  {
    path: "/systemManagement",
    name: "systemManagement",
    component: layout.normal,
    children: [
      {
        path: "projects",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/systemManagement/projects/index.vue"
          )
      },
      {
        path: "users",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/systemManagement/users/index.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

/*function createRouter(menus: Array<Menu>) {
  let routesConfig: RouteConfig[] = [];
  menus.forEach(menu => {
    let routeConfig = new (class implements RouteConfig {
      path = menu.path;
      name = menu.name;
      meta = {title: menu.title};
      component = layout.normal;
      children = [];

      // alias: string | string[];
      // beforeEnter: NavigationGuard;
      // caseSensitive: boolean;
      // children: RouteConfig[];
      // component: Component;
      // components: Dictionary<Component>;
      // meta: any;
      // name: string;
      // path: string;
      // pathToRegexpOptions: PathToRegexpOptions;
      // props: boolean | Object | RoutePropsFunction;
      // redirect: RedirectOption;
    });


  });
}*/

// const router = createRouter([]);

export default router;
