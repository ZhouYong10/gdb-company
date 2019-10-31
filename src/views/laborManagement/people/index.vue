<template>
  <div class="page-container">
    <!--面包屑导航条-->
    <fm-breadcrumb :items="breadNavs" />
    <el-main class="page-content scroll-bar">
      <!--人员录入概况-->
      <fm-title-container class="general-info-box" title="">
        <template v-slot:header>
          <fm-more-details class="more-details" path="/laborManagement/people/briefDetails" />
        </template>
        <template v-slot:content>
          <el-row class="general-situation-box" type="flex" align="middle">
            <el-col :span="6">
              <fm-title-container class="total-num" title="人员概况">
                <template v-slot:content>
                  <p class="num"><strong>{{totalNum}}</strong></p>
                  <span class="desc">劳务总人数</span>
                </template>
              </fm-title-container>
            </el-col>
            <el-col :span="6">
              <fm-percent-box
                class="entering-type"
                :bar-height="20"
                :title="enteringType.title"
                :datas="enteringType.bars"
              />
            </el-col>
            <el-col :span="6">
              <fm-percent-box
                class="faces-type"
                :bar-height="20"
                :title="faceType.title"
                :datas="faceType.bars"
              />
            </el-col>
            <el-col :span="6">
              <fm-percent-box
                class="education-type"
                :bar-height="20"
                :title="educationType.title"
                :datas="educationType.bars"
              />
            </el-col>
          </el-row>
        </template>
      </fm-title-container>
      <!--人员变动统计-->
      <el-row class="people-change-info">
        <!--人员变动统计 Echarts 图表-->
        <el-col :span="12">
          <fm-people-change-chart class="chart" />
        </el-col>
        <!--近一周人员动态滚动列表-->
        <el-col :span="12">
          <fm-people-change-week
            class="scroll-list"
            title="近一周人员动态"
            title-left="进场人员"
            :datas-left="pcw.datasLeft"
            title-right="出场人员"
            :datas-right="pcw.datasRight"
          />
        </el-col>
      </el-row>
      <!--人员活跃度统计-->
      <fm-title-container class="people-account" title="人员活跃度统计">
        <template v-slot:content>
          <el-table :data="accountTable" stripe style="width: 100%" @row-click="selectRow">
            <el-table-column prop="site" label="项目"> </el-table-column>
            <el-table-column prop="total" label="总人数"> </el-table-column>
            <el-table-column prop="work" label="近10日出勤人数"></el-table-column>
            <el-table-column
              prop="notWork"
              label="近10日未出勤人数"
            ></el-table-column>
            <el-table-column prop="activeRate" label="近10日人员平均活跃率">
            </el-table-column>
          </el-table>
        </template>
      </fm-title-container>
    </el-main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FmPercentBox from "@/components/FmPercentBox/index.vue";
import FmPeopleChangeChart from "@/components/FmPeopleChangeChart/index.vue";
import FmPeopleChangeWeek from "@/components/FmPeopleChangeWeek/index.vue";
import FmMoreDetails from "@/components/FmMoreDetails/index.vue";
import FmBreadcrumb from "@/components/FmBreadcrumb/index.vue";
import FmTitleContainer from "@/components/FmTitleContainer/index.vue";

@Component({
  components: {
    FmTitleContainer,
    FmBreadcrumb,
    FmMoreDetails,
    FmPercentBox,
    FmPeopleChangeChart,
    FmPeopleChangeWeek
  }
})
export default class extends Vue {
  /*面包屑导航*/
  breadNavs = [{ name: "劳务管理", path: "" }, { name: "人员管理", path: "" }];
  /*人员概况*/
  totalNum = 11000;
  //人员录入情况
  enteringType = {
    title: "人员录入情况",
    bars: [
      { percentage: 80, desc: "身份证录入", color: "#1EA5FF" },
      { percentage: 20, desc: "手动录入", color: "#F3B323" }
    ]
  };
  //人脸录入情况
  faceType = {
    title: "人脸录入情况",
    bars: [
      { percentage: 60, desc: "人脸录入", color: "#1EA5FF" },
      { percentage: 40, desc: "其他", color: "#F3B323" }
    ]
  };
  //人员教育情况
  educationType = {
    title: "人员教育情况",
    bars: [
      { percentage: 70, desc: "三级教育", color: "#1EA5FF" },
      { percentage: 30, desc: "其他", color: "#F3B323" }
    ]
  };
  /*人员变动统计*/
  //近一周人员动态
  pcw = {
    datasLeft: [
      {
        avatarUrl: "/some/where",
        name: "姓名1",
        profession: "工种",
        site: "所属工地",
        dateTime: "日期时间"
      },
      {
        avatarUrl: "/some/where",
        name: "姓名2",
        profession: "工种",
        site: "所属工地",
        dateTime: "日期时间"
      },
      {
        avatarUrl: "/some/where",
        name: "姓名3",
        profession: "工种",
        site: "所属工地",
        dateTime: "日期时间"
      },
      {
        avatarUrl: "/some/where",
        name: "姓名4",
        profession: "工种",
        site: "所属工地",
        dateTime: "日期时间"
      },
      {
        avatarUrl: "/some/where",
        name: "姓名5",
        profession: "工种",
        site: "所属工地",
        dateTime: "日期时间"
      },
      {
        avatarUrl: "/some/where",
        name: "姓名6",
        profession: "工种",
        site: "所属工地",
        dateTime: "日期时间"
      }
    ],
    datasRight: [
      {
        avatarUrl: "/some/where",
        name: "姓名1",
        profession: "工种",
        site: "所属工地",
        dateTime: "日期时间"
      },
      {
        avatarUrl: "/some/where",
        name: "姓名2",
        profession: "工种",
        site: "所属工地",
        dateTime: "日期时间"
      },
      {
        avatarUrl: "/some/where",
        name: "姓名3",
        profession: "工种",
        site: "所属工地",
        dateTime: "日期时间"
      },
      {
        avatarUrl: "/some/where",
        name: "姓名4",
        profession: "工种",
        site: "所属工地",
        dateTime: "日期时间"
      },
      {
        avatarUrl: "/some/where",
        name: "姓名5",
        profession: "工种",
        site: "所属工地",
        dateTime: "日期时间"
      },
      {
        avatarUrl: "/some/where",
        name: "姓名6",
        profession: "工种",
        site: "所属工地",
        dateTime: "日期时间"
      }
    ]
  };
  /*人员活跃度统计*/
  accountTable = [
    {
      site: "A1项目J2标段",
      total: 20,
      work: 30,
      notWork: 10,
      activeRate: "20%"
    },
    {
      site: "A2项目J2标段",
      total: 10,
      work: 20,
      notWork: 10,
      activeRate: "5%"
    },
    {
      site: "A3项目J4标段",
      total: 30,
      work: 40,
      notWork: 1,
      activeRate: "30%"
    },
    {
      site: "A3项目J4标段",
      total: 30,
      work: 40,
      notWork: 1,
      activeRate: "30%"
    },
    {
      site: "A3项目J4标段",
      total: 30,
      work: 40,
      notWork: 1,
      activeRate: "30%"
    },
    {
      site: "A3项目J4标段",
      total: 30,
      work: 40,
      notWork: 1,
      activeRate: "30%"
    },
    { site: "A3项目J4标段", total: 30, work: 40, notWork: 1, activeRate: "30%" }
  ];

  selectRow(row) {
    this.$router.push(`/laborManagement/people/${row.id}/activeAccount?site=${row.site}`);
  }
}
</script>

<style scoped lang="stylus">
.total-num
  border none
  box-shadow none
  height 119px
  .num
    margin 0
    padding-top 12px
    font-size 3.2em
    color #1EA5FF
  .desc
    font-size 0.7em
    margin-left 8px
    color #a0a5a5
.total-num, .entering-type, .faces-type, .education-type
  padding-right 16px
  margin-right 16px
  border-right 1px solid #a0a5a5
  border-radius 0
.education-type
  border none
.people-change-info
  margin-top 10px
  .chart
    margin-right 12px
    padding-bottom 2px
.people-account
  margin-top 10px
</style>
