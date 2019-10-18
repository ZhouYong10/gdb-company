import View from "@/models/View";

const views = [
  { id: "dataBordIndex", path: "./dataBord/index.vue" },
  {
    id: "dustMonitoringEquipment",
    path: "./dustMonitoring/equipment/index.vue"
  },
  {
    id: "dustMonitoringRealtimeData",
    path: "./dustMonitoring/realtimeData/index.vue"
  },
  {
    id: "dustMonitoringHistoryData",
    path: "./dustMonitoring/historyData/index.vue"
  },
  {
    id: "laborManagementAttendance",
    path: "./laborManagement/attendance/index.vue"
  },
  {
    id: "laborManagementEquipment",
    path: "./laborManagement/equipment/index.vue"
  },
  {
    id: "laborManagementJobEvaluation",
    path: "./laborManagement/jobEvaluation/index.vue"
  },
  { id: "laborManagementPeople", path: "./laborManagement/people/index.vue" },
  {
    id: "laborManagementStaffQuery",
    path: "./laborManagement/staffQuery/index.vue"
  },
  { id: "projectOverviewIndex", path: "./projectOverview/index.vue" },
  {
    id: "systemManagementProjects",
    path: "./systemManagement/projects/index.vue"
  },
  { id: "systemManagementUsers", path: "./systemManagement/users/index.vue" },
  {
    id: "towerManagementBoxEquipment",
    path: "./towerManagement/boxEquipment/index.vue"
  },
  {
    id: "towerManagementBoxMonitoring",
    path: "./towerManagement/boxMonitoring/index.vue"
  },
  {
    id: "towerManagementEquipment",
    path: "./towerManagement/equipment/index.vue"
  },
  {
    id: "videoSurveillanceEquipment",
    path: "./videoSurveillance/equipment/index.vue"
  },
  {
    id: "videoSurveillanceHistoryPlayback",
    path: "./videoSurveillance/historyPlayback/index.vue"
  },
  {
    id: "videoSurveillanceRealtimeMonitoring",
    path: "./videoSurveillance/realtimeMonitoring/index.vue"
  }
];

/*const Views = {
  dataBord: {
    index: () =>
      import(
        /!* webpackChunkName: "dataBordIndex" *!/ "@/views/dataBord/index.vue"
      )
  },
  dustMonitoring: {
    equipment: () =>
      import(
        /!* webpackChunkName: "dustMonitoringEquipment" *!/ "@/views/dustMonitoring/equipment/index.vue"
      ),
    realtimeData: () =>
      import(
        /!* webpackChunkName: "dustMonitoringRealtimeData" *!/ "@/views/dustMonitoring/realtimeData/index.vue"
      ),
    historyData: () =>
      import(
        /!* webpackChunkName: "dustMonitoringHistoryData" *!/ "@/views/dustMonitoring/historyData/index.vue"
      )
  },
  laborManagement: {
    attendance: () =>
      import(
        /!* webpackChunkName: "laborManagementAttendance" *!/ "@/views/laborManagement/attendance/index.vue"
      ),
    equipment: () =>
      import(
        /!* webpackChunkName: "laborManagementEquipment" *!/ "@/views/laborManagement/equipment/index.vue"
      ),
    jobEvaluation: () =>
      import(
        /!* webpackChunkName: "laborManagementJobEvaluation" *!/ "@/views/laborManagement/jobEvaluation/index.vue"
      ),
    people: () =>
      import(
        /!* webpackChunkName: "laborManagementPeople" *!/ "@/views/laborManagement/people/index.vue"
      ),
    staffQuery: () =>
      import(
        /!* webpackChunkName: "laborManagementStaffQuery" *!/ "@/views/laborManagement/staffQuery/index.vue"
      )
  },
  projectOverview: {
    index: () =>
      import(
        /!* webpackChunkName: "projectOverviewIndex" *!/ "@/views/projectOverview/index.vue"
      )
  },
  systemManagement: {
    projects: () =>
      import(
        /!* webpackChunkName: "systemManagementProjects" *!/ "@/views/systemManagement/projects/index.vue"
      ),
    users: () =>
      import(
        /!* webpackChunkName: "systemManagementUsers" *!/ "@/views/systemManagement/users/index.vue"
      )
  },
  towerManagement: {
    boxEquipment: () =>
      import(
        /!* webpackChunkName: "towerManagementBoxEquipment" *!/ "@/views/towerManagement/boxEquipment/index.vue"
      ),
    boxMonitoring: () =>
      import(
        /!* webpackChunkName: "towerManagementBoxMonitoring" *!/ "@/views/towerManagement/boxMonitoring/index.vue"
      ),
    equipment: () =>
      import(
        /!* webpackChunkName: "towerManagementEquipment" *!/ "@/views/towerManagement/equipment/index.vue"
      )
  },
  videoSurveillance: {
    equipment: () =>
      import(
        /!* webpackChunkName: "videoSurveillanceEquipment" *!/ "@/views/videoSurveillance/equipment/index.vue"
      ),
    historyData: () =>
      import(
        /!* webpackChunkName: "videoSurveillanceHistoryPlayback" *!/ "@/views/videoSurveillance/historyPlayback/index.vue"
      ),
    realtimeMonitoring: () =>
      import(
        /!* webpackChunkName: "videoSurveillanceRealtimeMonitoring" *!/ "@/views/videoSurveillance/realtimeMonitoring/index.vue"
      )
  }
};*/

function getView(url: string) {
  let viewLocation = "@/views" + url + "/index.vue";
  return () => {
    import(viewLocation);
  };
}

export default { getView };
