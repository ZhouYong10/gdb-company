import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menus: [
      {
        name: "数据看板",
        icon: "",
        items: [{ name: "选项一", url: "/dataBord" }]
      },
      {
        name: "项目总览",
        icon: "",
        items: [{ name: "选项一", url: "/projectOverview" }]
      },
      {
        name: "劳务管理",
        icon: "",
        items: [
          { name: "人员管理", url: "/laborManagement/people" },
          { name: "考勤管理", url: "/laborManagement/attendance" },
          { name: "工种分析", url: "/laborManagement/jobEvaluation" },
          { name: "人员查询", url: "/laborManagement/staffQuery" },
          { name: "设备管理", url: "/laborManagement/equipment" }
        ]
      },
      {
        name: "扬尘监测",
        icon: "",
        items: [
          { name: "实时数据", url: "/dustMonitoring/realtimeData" },
          { name: "历史数据", url: "/dustMonitoring/historyData" },
          { name: "设备管理", url: "/dustMonitoring/equipment" }
        ]
      },
      {
        name: "视频监控",
        icon: "",
        items: [
          { name: "实时监控", url: "/videoSurveillance/realtimeMonitoring" },
          { name: "历史回放", url: "/videoSurveillance/historyPlayback" },
          { name: "设备管理", url: "/videoSurveillance/equipment" }
        ]
      },
      {
        name: "塔机管理",
        icon: "",
        items: [
          { name: "塔机管理", url: "/towerManagement/equipment" },
          { name: "黑匣子监测", url: "/towerManagement/boxMonitoring" },
          { name: "黑匣子设备管理", url: "/towerManagement/boxEquipment" }
        ]
      },
      {
        name: "系统管理",
        icon: "",
        items: [
          { name: "项目管理", url: "/systemManagement/projects" },
          { name: "系统用户", url: "/systemManagement/users" }
        ]
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
