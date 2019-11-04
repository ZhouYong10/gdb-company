<template>
  <div class="page-container">
    <!--面包屑导航条-->
    <fm-breadcrumb :items="breadNavs" />
    <el-main class="page-content scroll-bar">
      <!--项目选择-->
      <div class="choose-multiple">
        <div class="select-search">
          <div class="select">
            <span class="site-name">项目名称</span>
            <el-select
              v-model="site"
              filterable
              placeholder="全部项目"
              size="mini"
            >
              <el-option
                v-for="(site, index) in sites"
                :key="index"
                :label="site.getName()"
                :value="site.getOid()"
              >
              </el-option>
            </el-select>
          </div>
        </div>
      </div>
      <!--年龄分析-性别分析-->
      <el-row class="analysis-box">
        <el-col :span="12" class="analysis-box-chird">
          <fm-simple-bar-chart
            class="analysis"
            :title="ageAnalysisChartsData.title"
            :tooltipFormatter="ageAnalysisChartsData.tipsFormater"
            :xAxis="ageAnalysisChartsData.xAxis"
            :series="ageAnalysisChartsData.series"
          />
        </el-col>
        <el-col :span="12"></el-col>
      </el-row>
      <!--地域分析-民族分析-->
      <el-row class="analysis-box">
        <el-col :span="12" class="analysis-box-chird">
          <fm-title-container title="地域分析">
            <template v-slot:header>
              <fm-more-details text="全部" path="/laborManagement/jobEvaluation/areaDetails"></fm-more-details>
            </template>
            <template v-slot:content>
              <el-table :data="areaTable" stripe style="width: 100%">
                <el-table-column prop="order" label="序号"> </el-table-column>
                <el-table-column prop="area" label="地域"> </el-table-column>
                <el-table-column prop="people" label="人数"></el-table-column>
                <el-table-column prop="percent" label="占比"></el-table-column>
              </el-table>
            </template>
          </fm-title-container>
        </el-col>
        <el-col :span="12" class="analysis-box-chird">
          <fm-title-container title="民族分析">
            <template v-slot:header>
              <fm-more-details text="全部" path="/laborManagement/jobEvaluation/nationDetails"></fm-more-details>
            </template>
            <template v-slot:content>
              <el-table :data="nationTable" stripe style="width: 100%">
                <el-table-column prop="order" label="序号"> </el-table-column>
                <el-table-column prop="nation" label="民族"> </el-table-column>
                <el-table-column prop="people" label="人数"></el-table-column>
                <el-table-column prop="percent" label="占比"></el-table-column>
              </el-table>
            </template>
          </fm-title-container>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FmBreadcrumb from "@/components/FmBreadcrumb/index.vue";
import { AppModule } from "@/store/modules/app";
import FmSimpleBarChart from "@/components/FmSimpleBarChart/index.vue";
import FmTitleContainer from "@/components/FmTitleContainer/index.vue";
import FmMoreDetails from "@/components/FmMoreDetails/index.vue";

@Component({
  components: {FmMoreDetails, FmTitleContainer, FmSimpleBarChart, FmBreadcrumb }
})
export default class extends Vue {
  /*面包屑导航*/
  breadNavs = [{ name: "劳务管理", path: "" }, { name: "人员分析", path: "" }];
  /*当前公司的所有工地列表*/
  get sites() {
    this.site = "";
    return AppModule.siteList;
  }
  /*选择的项目(即工地)*/
  site = "";
  /*年龄分析数据*/
  ageAnalysisChartsData = {
    title: "年龄分析",
    xAxis: ["18-35岁", "36-45岁", "46-55岁", "56以上"],
    tipsFormater: "{b0}年龄段百分比<br />{a0}: {c0}%<br />{a1}: {c1}%",
    series: [
      {
        name: "男",
        type: "bar",
        barWidth: "20%",
        color: "#60b3eb",
        data: [75, 56, 46, 15]
      },
      {
        name: "女",
        type: "bar",
        barWidth: "20%",
        color: "#fa827f",
        data: [85, 36, 26, 8]
      }
    ]
  };
  /*地域分析数据*/
  areaTable = [
    {
      order: 1,
      area: "四川",
      people: 20,
      percent: "20%"
    },
    {
      order: 2,
      area: "重庆",
      people: 50,
      percent: "20%"
    },
    {
      order: 3,
      area: "深圳",
      people: 45,
      percent: "45%"
    },
    {
      order: 4,
      area: "深圳",
      people: 45,
      percent: "45%"
    },
    {
      order: 5,
      area: "深圳",
      people: 45,
      percent: "45%"
    },
    {
      order: 6,
      area: "深圳",
      people: 45,
      percent: "45%"
    },
    {
      order: 7,
      area: "深圳",
      people: 45,
      percent: "45%"
    }
  ];
  /*民族分析数据*/
  nationTable = [
    {
      order: 1,
      nation: "汉族",
      people: 20,
      percent: "20%"
    },
    {
      order: 2,
      nation: "羌族",
      people: 50,
      percent: "20%"
    },
    {
      order: 3,
      nation: "彝族",
      people: 45,
      percent: "45%"
    },
    {
      order: 4,
      nation: "藏族",
      people: 45,
      percent: "45%"
    },
    {
      order: 5,
      nation: "游牧民族",
      people: 45,
      percent: "45%"
    },
    {
      order: 6,
      nation: "战斗民族",
      people: 45,
      percent: "45%"
    },
    {
      order: 7,
      nation: "魔族",
      people: 45,
      percent: "45%"
    }
  ];
}
</script>

<style scoped lang="stylus">
.select-search
  display flex
  justify-content space-between
  margin-bottom 12px
  .site-name
    display inline-block
    padding 0 32px 0 12px
    font-weight 400
.analysis-box
  margin-top 10px
  .analysis-box-chird
    padding 0 5px
</style>
