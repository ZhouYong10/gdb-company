<template>
  <div class="page-container">
    <!--面包屑导航条-->
    <fm-breadcrumb :items="breadNavs" />
    <el-main class="page-content scroll-bar">
      <!--人员录入概况-->
      <el-row class="general-info-box">
        <el-col>
          <fm-more-details class="more-details" path="/laborManagement/people/briefDetails" />
        </el-col>
        <el-col :span="24">
          <el-row class="general-situation-box" type="flex" align="middle">
            <el-col :span="6">
              <div class="total-num">
                <h2>人员概况</h2>
                <div>
                  <p class="num"><strong>{{totalNum}}</strong></p>
                  <span class="desc">劳务总人数</span>
                </div>
              </div>
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
        </el-col>
      </el-row>
      <!--人员变动统计-->
      <el-row class="people-change-info">
        <el-col :span="12">
          <fm-people-change-chart class="chart" />
        </el-col>
        <el-col :span="12">
          <fm-people-change-week
            class="scroll-list"
            :title="pcw.title"
            :title-left="pcw.titleLeft"
            :datas-left="pcw.datasLeft"
            :title-right="pcw.titleRight"
            :datas-right="pcw.datasRight"
          />
        </el-col>
      </el-row>
      <!--人员活跃度统计-->
      <div class="people-account">
        <div class="header">
          <h1 class="title">人员活跃度统计</h1>
        </div>
        <div class="account-table">
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
        </div>
      </div>
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

@Component({
  components: {
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
    title: "近一周人员动态",
    titleLeft: "进场人员",
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
    titleRight: "出场人员",
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
.general-info-box
  background #fff
  padding 8px
  border 1px solid #d2d9d9
  .more-details
    float right
  .general-situation-box
    padding 8px
  .total-num
    height 140px
    h2
        font-size 1em
        margin 0 0 8px 6px
    .num
        margin 26px 0 0
        font-size 3em
        color #1EA5FF
    .desc
        font-size 0.7em
        color #a0a5a5
  .total-num, .entering-type, .faces-type, .education-type
    padding-right 16px
    margin-right 16px
    border-right 1px solid #a0a5a5
  .education-type
    border none
.people-change-info
  margin-top 10px
  .chart, .scroll-list
    border 1px solid #d2d9d9
    background #fff
    padding 8px
  .chart
    margin-right 12px
    padding-bottom 0
.people-account
  margin-top 10px
  border 1px solid #d2d9d9
  background #ffffff
  padding 8px
  .header
    display flex
    justify-content space-between
    .title
      margin 0
      font-size 1em
</style>
