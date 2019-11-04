<template>
  <div class="page-container">
    <!--面包屑导航条-->
    <fm-breadcrumb :items="breadNavs"></fm-breadcrumb>
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
      <fm-title-container title="">
        <template v-slot:content>
          <el-table :data="nationTable" stripe style="width: 100%">
            <el-table-column prop="order" label="序号"> </el-table-column>
            <el-table-column prop="nation" label="民族"> </el-table-column>
            <el-table-column prop="people" label="人数"></el-table-column>
            <el-table-column prop="percent" label="占比"></el-table-column>
          </el-table>
        </template>
      </fm-title-container>
    </el-main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FmBreadcrumb from "@/components/FmBreadcrumb/index.vue";
import FmTitleContainer from "@/components/FmTitleContainer/index.vue";
import {AppModule} from '@/store/modules/app';

@Component({
  components: {FmTitleContainer, FmBreadcrumb }
})
export default class extends Vue {
  /*当前公司的所有工地列表*/
  get sites() {
    this.site = "";
    return AppModule.siteList;
  }
  /*选择的项目(即工地)*/
  site = "";
  breadNavs = [{ name: "劳务管理", path: "" }, { name: "人员分析", path: "/laborManagement/jobEvaluation" }, { name: "民族分析-全部", path: "" }];
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
</style>
