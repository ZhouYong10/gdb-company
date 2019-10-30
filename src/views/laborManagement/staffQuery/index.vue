<template>
  <div class="page-container">
    <fm-breadcrumb :items="breadItems" />
    <el-main class="page-content">
      <div class="site-or-card">
        <div class="site">
          <span class="site-name">项目名称</span>
          <el-select v-model="value" filterable placeholder="全部项目">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <fm-radio-list
        :title="radioListTitle"
        :items="radioItems"
        @selected="professionSelected"
      />
    </el-main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FmBreadcrumb from "@/components/FmBreadcrumb/index.vue";
import FmRadioList from "@/components/FmRadioList/index.vue";

@Component({
  components: {
    FmBreadcrumb,
    FmRadioList
  }
})
export default class extends Vue {
  breadItems = [{ name: "劳务管理", path: "" }, { name: "人员查询", path: "" }];

  radioListTitle = "工种";
  radioItems = [
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
  ];

  professionSelected(aim) {
    console.log(aim, " 11111111111111");
  }
}
</script>

<style scoped lang="stylus"></style>
