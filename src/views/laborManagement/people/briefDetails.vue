<template>
  <div class="page-container">
    <fm-breadcrumb :items="breadItems" />
    <el-main class="page-content">
      <el-table :data="tableData" stripe height="100%" width="100%" @row-click="selectRow">
        <el-table-column prop="site" label="项目名称"> </el-table-column>
        <el-table-column prop="totalAccount" label="总人数"> </el-table-column>
        <el-table-column prop="idCard" label="身份证录入"> </el-table-column>
        <el-table-column prop="hand" label="手动录入"> </el-table-column>
        <el-table-column prop="face" label="人脸录入"> </el-table-column>
        <el-table-column prop="education" label="三级教育"> </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import FmBreadcrumb from "@/components/FmBreadcrumb/index.vue";
@Component({
  components: { FmBreadcrumb }
})
export default class extends Vue {
  breadItems = [
    { name: "劳务管理", path: "" },
    { name: "人员管理", path: "/laborManagement/people" },
    { name: "人员概况详情", path: "" }
  ];

  selectRow(row) {
    this.$router.push(
      `/laborManagement/people/${row.id}/briefDetailsFace?site=${row.site}`
    );
  }
  tableData = [
    {
      id: "1",
      site: "项目名称1",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "2",
      site: "项目名2称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "3",
      site: "项目3名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "4",
      site: "项目4名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "5",
      site: "项目5名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "6",
      site: "项目名称6",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "7",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "8",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "9",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "10",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "11",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "12",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "13",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "14",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "15",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "16",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "17",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "18",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "19",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "20",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "21",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "22",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "23",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "24",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "25",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    },
    {
      id: "26",
      site: "项目名称",
      totalAccount: 12,
      idCard: 20,
      hand: 30,
      face: 50,
      education: 70
    }
  ];
}
</script>

<style scoped lang="stylus">

</style>
