<template>
  <el-main class="scroll-bar">
    <el-row class="general-info-box">
      <el-col
        :xl="{ span: 1, push: 23 }"
        :lg="{ span: 2, push: 22 }"
        :md="{ span: 3, push: 21 }"
      >
        <fm-more-details :path="'#'"/>
      </el-col>
      <el-col :span="24">
        <el-row class="general-situation-box" type="flex" align="middle">
          <el-col :span="6">
            <div class="total-num">
              <h2>人员概况</h2>
              <div>
                <p class="num"><strong>10000</strong></p>
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

  </el-main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FmPercentBox from "@/components/FmPercentBox/index.vue";
import FmPeopleChangeChart from "@/components/FmPeopleChangeChart/index.vue";
import FmPeopleChangeWeek from "@/components/FmPeopleChangeWeek/index.vue";
import FmMoreDetails from "@/components/FmMoreDetails/index.vue";

@Component({
  components: {
    FmMoreDetails,
    FmPercentBox,
    FmPeopleChangeChart,
    FmPeopleChangeWeek
  }
})
export default class extends Vue {
  enteringType = {
    title: "人员录入情况",
    bars: [
      { percentage: 80, desc: "身份证录入", color: "#1EA5FF" },
      { percentage: 20, desc: "手动录入", color: "#F3B323" }
    ]
  };
  faceType = {
    title: "人脸录入情况",
    bars: [
      { percentage: 60, desc: "人脸录入", color: "#1EA5FF" },
      { percentage: 40, desc: "其他", color: "#F3B323" }
    ]
  };
  educationType = {
    title: "人员教育情况",
    bars: [
      { percentage: 70, desc: "三级教育", color: "#1EA5FF" },
      { percentage: 30, desc: "其他", color: "#F3B323" }
    ]
  };
  // people change week data
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
}
</script>

<style scoped lang="stylus">
.el-main
    padding 6px
    padding-bottom 0
    height 100%
.general-info-box
  background #fff
  padding 8px
  border 1px solid #d2d9d9
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
  margin-top 12px
  .chart, .scroll-list
    border 1px solid #d2d9d9
    background #fff
    padding 8px
  .chart
    margin-right 12px
    padding-bottom 0
</style>
