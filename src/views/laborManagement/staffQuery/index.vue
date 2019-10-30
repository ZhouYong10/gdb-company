<template>
  <div class="page-container">
    <fm-breadcrumb :items="breadItems" />
    <el-main class="page-content">
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
          <div class="search">
            <el-input
              placeholder="姓名/身份证"
              v-model="nameOrId"
              size="mini"
              clearable
            >
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <fm-radio-list
          :title="professionList.title"
          :items="professionList.items"
          v-model="professionSelected"
        />
        <div class="age-select-range">
          <fm-radio-list
            :title="ageList.title"
            :items="ageList.items"
            v-model="ageSelected"
          />
          <fm-range-select />
        </div>
      </div>
    </el-main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";
import FmBreadcrumb from "@/components/FmBreadcrumb/index.vue";
import FmRadioList from "@/components/FmRadioList/index.vue";
import FmRangeSelect from "@/components/FmRangeSelect/index.vue";

@Component({
  components: {
    FmRangeSelect,
    FmBreadcrumb,
    FmRadioList
  }
})
export default class extends Vue {
  breadItems = [{ name: "劳务管理", path: "" }, { name: "人员查询", path: "" }];
  /*当前公司的所有工地列表*/
  get sites() {
    this.site = "";
    return AppModule.siteList;
  }
  /*选择的项目(即工地)*/
  site = "";
  /*输入的姓名或身份证*/
  nameOrId = "";
  /*当前选中的工种*/
  professionSelected = { name: "不限", id: "0" };
  /*工种列表*/
  professionList = {
    title: "工种",
    items: [
      { name: "不限", id: "0" },
      { name: "土方", id: "1" },
      { name: "砖工", id: "2" },
      { name: "混凝土", id: "3" },
      { name: "抹灰", id: "4" },
      { name: "防水", id: "5" },
      { name: "钢筋", id: "6" },
      { name: "模板", id: "7" },
      { name: "架子", id: "8" },
      { name: "焊工", id: "9" },
      { name: "小工", id: "10" },
      { name: "塔吊", id: "11" },
      { name: "施工电梯", id: "12" },
      { name: "信号工", id: "13" },
      { name: "物料提升", id: "14" },
      { name: "龙门吊", id: "15" },
      { name: "管理人员", id: "16" },
      { name: "防护与栏杆", id: "17" },
      { name: "架子", id: "18" },
      { name: "保温", id: "19" },
      { name: "小工", id: "20" },
      { name: "门窗百叶", id: "21" },
      { name: "地基与基础工程", id: "22" },
      { name: "建筑装饰装修", id: "23" },
      { name: "建筑幕墙", id: "24" },
      { name: "钢结构工程", id: "25" },
      { name: "电梯安装", id: "26" },
      { name: "消防设施", id: "27" },
      { name: "特种专业工程", id: "28" },
      { name: "起重设备安装", id: "29" }
    ]
  };
  /*当前选中的年龄段*/
  ageSelected = { name: "不限", id: "0" };
  /*年龄列表*/
  ageList = {
    title: "年龄",
    items: [
      { name: "不限", id: "0" },
      { name: "18-35岁", id: "1" },
      { name: "36-45岁", id: "2" },
      { name: "46-55岁", id: "3" },
      { name: "56岁以上", id: "4" }
    ]
  };
}
</script>

<style scoped lang="stylus">
.choose-multiple
  width 70%
  height 100%
.select-search
  display flex
  justify-content space-between
  margin-bottom 12px
  .site-name
    display inline-block
    padding 0 32px 0 12px
    font-weight 400
.age-select-range
  display flex
  align-items center
</style>
