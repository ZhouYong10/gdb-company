import { RouteConfig } from "vue-router";

const routes: Array<RouteConfig> = [
  {
    path: "laborManagement/people/briefDetails",
    component: () => import("@/views/laborManagement/people/briefDetails.vue"),
    meta: { title: "人员概况详情" }
  },
  {
    path: "laborManagement/people/changeDetails",
    component: () => import("@/views/laborManagement/people/changeDetails.vue"),
    meta: { title: "人员变动详情" }
  },
  {
    path: "laborManagement/people/:siteId/briefDetailsFace",
    component: () =>
      import("@/views/laborManagement/people/briefDetailsFace.vue"),
    meta: { title: "人脸录入详情" },
    props: route => ({ siteId: route.params.siteId, siteName: route.query.site })
  },
  {
    path: "laborManagement/people/changeDetails/enter/:siteId",
    component: () => import("@/views/laborManagement/people/changeEnter.vue"),
    meta: { title: "今日进场人数" },
    props: route => ({ siteId: route.params.siteId, siteName: route.query.site})
  },
  {
    path: "laborManagement/people/changeDetails/out/:siteId",
    component: () => import("@/views/laborManagement/people/changeOut.vue"),
    meta: { title: "今日出场人数" },
    props: route => ({ siteId: route.params.siteId, siteName: route.query.site})
  },
  {
    path: "laborManagement/people/:siteId/activeAccount",
    component: () => import("@/views/laborManagement/people/activeAccount.vue"),
    meta: { title: "人员活跃度" },
    props: route => ({ siteId: route.params.siteId, siteName: route.query.site })
  },
  {
    path: "laborManagement/people/:siteId/activeAccount/:companyId",
    component: () => import("@/views/laborManagement/people/activeAccountCompany.vue"),
    meta: { title: "公司人员活跃度" },
    props: route => ({
      siteId: route.params.siteId,
      siteName: route.query.site,
      companyId: route.params.companyId,
      companyName: route.query.company
    })
  },
  {
    path: "laborManagement/people/:siteId/activeAccount/:companyId/:teamId",
    component: () => import("@/views/laborManagement/people/activeAccountCompanyTeam.vue"),
    meta: { title: "班组人员活跃详情" },
    props: route => ({
      siteId: route.params.siteId,
      siteName: route.query.site,
      companyId: route.params.companyId,
      companyName: route.query.company,
      teamId: route.params.teamId,
      teamName: route.query.team
    })
  },
  {
    path: "laborManagement/jobEvaluation/areaDetails",
    component: () => import("@/views/laborManagement/jobEvaluation/areaDetails.vue"),
    meta: { title: "地域分析详情" }
  },
  {
    path: "laborManagement/jobEvaluation/nationDetails",
    component: () => import("@/views/laborManagement/jobEvaluation/nationDetails.vue"),
    meta: { title: "民族分析详情" }
  }
];

export default routes;
