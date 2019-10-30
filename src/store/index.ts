import Vue from "vue";
import Vuex from "vuex";
import {AppState} from "@/store/modules/app";
Vue.use(Vuex);

export const menuGroups = [
  {
    id: "1",
    name: "数据看板",
    accessPoint: "",
    icon: "el-icon-s-finance",
    menus: [
      {
        id: "1-1",
        name: "选项一",
        accessPoint: "",
        icon: "",
        path: "dataBord"
      }
    ]
  },
  {
    id: "2",
    name: "项目总览",
    accessPoint: "",
    icon: "el-icon-s-finance",
    menus: [
      {
        id: "2-1",
        name: "选项一",
        accessPoint: "",
        icon: "",
        path: "projectOverview"
      }
    ]
  },
  {
    id: "3",
    name: "劳务管理",
    accessPoint: "",
    icon: "el-icon-s-finance",
    menus: [
      {
        id: "3-1",
        name: "人员管理",
        accessPoint: "",
        icon: "",
        path: "laborManagement/people"
      },
      {
        id: "3-2",
        name: "考勤管理",
        accessPoint: "",
        icon: "",
        path: "laborManagement/attendance"
      },
      {
        id: "3-3",
        name: "人员分析",
        accessPoint: "",
        icon: "",
        path: "laborManagement/jobEvaluation"
      },
      {
        id: "3-4",
        name: "人员查询",
        accessPoint: "",
        icon: "",
        path: "laborManagement/staffQuery"
      },
      {
        id: "3-5",
        name: "设备管理",
        accessPoint: "",
        icon: "",
        path: "laborManagement/equipment"
      }
    ]
  },
  {
    id: "4",
    name: "扬尘监测",
    accessPoint: "",
    icon: "el-icon-s-finance",
    menus: [
      {
        id: "4-1",
        name: "实时数据",
        accessPoint: "",
        icon: "",
        path: "dustMonitoring/realtimeData"
      },
      {
        id: "4-2",
        name: "历史数据",
        accessPoint: "",
        icon: "",
        path: "dustMonitoring/historyData"
      },
      {
        id: "4-3",
        name: "设备管理",
        accessPoint: "",
        icon: "",
        path: "dustMonitoring/equipment"
      }
    ]
  },
  {
    id: "5",
    name: "视频监控",
    accessPoint: "",
    icon: "el-icon-s-finance",
    menus: [
      {
        id: "5-1",
        name: "实时监控",
        accessPoint: "",
        icon: "",
        path: "videoSurveillance/realtimeMonitoring"
      },
      {
        id: "5-2",
        name: "历史回放",
        accessPoint: "",
        icon: "",
        path: "videoSurveillance/historyPlayback"
      },
      {
        id: "5-3",
        name: "设备管理",
        accessPoint: "",
        icon: "",
        path: "videoSurveillance/equipment"
      }
    ]
  },
  {
    id: "6",
    name: "塔机管理",
    accessPoint: "",
    icon: "el-icon-s-finance",
    menus: [
      {
        id: "6-1",
        name: "塔机管理",
        accessPoint: "",
        icon: "",
        path: "towerManagement/equipment"
      },
      {
        id: "6-2",
        name: "黑匣子监测",
        accessPoint: "",
        icon: "",
        path: "towerManagement/boxMonitoring"
      },
      {
        id: "6-3",
        name: "黑匣子设备管理",
        accessPoint: "",
        icon: "",
        path: "towerManagement/boxEquipment"
      }
    ]
  },
  {
    id: "7",
    name: "公司管理",
    accessPoint: "",
    icon: "el-icon-s-tools",
    menus: [
      {
        id: "7-1",
        name: "项目管理",
        accessPoint: "",
        icon: "",
        path: "systemManagement/projects"
      },
      {
        id: "7-2",
        name: "系统用户",
        accessPoint: "",
        icon: "",
        path: "systemManagement/users"
      }
    ]
  },
  {
    id: "8",
    name: "测试Web页面",
    accessPoint: "",
    icon: "el-icon-warning",
    menus: [
      {
        id: "8-1",
        name: "页面一",
        accessPoint: "",
        icon: "",
        path: "webPage/web/product/index.html?domain=www.gongdibang.cn"
      },
      {
        id: "8-2",
        name: "页面二",
        accessPoint: "",
        icon: "",
        path: "webPage/web/product/future.html?domain=www.gongdibang.cn"
      },
      {
        id: "8-3",
        name: "页面三",
        accessPoint: "",
        icon: "el-icon-warning",
        path: "webPage/?domain=www.baidu.com"
      },
      {
        id: "8-4",
        name: "页面四",
        accessPoint: "",
        icon: "el-icon-warning",
        path: "webPage/hello/http"
      }
    ]
  }
];


interface RootState {
  app: AppState
}

export default new Vuex.Store<RootState>({});
