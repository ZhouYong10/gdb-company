<template>
  <div class="page-container">
    <fm-breadcrumb :items="breadItems" />
    <el-main class="page-content">
      <el-table :data="tableData" stripe height="100%" width="100%" @row-click="selectRow">
        <el-table-column type="index" min-width="30px"> </el-table-column>
        <el-table-column prop="team" label="班组"> </el-table-column>
        <el-table-column prop="teamLeader" label="班组长"> </el-table-column>
        <el-table-column prop="totalNum" label="总人数"> </el-table-column>
        <el-table-column prop="workNum" label="近10日出勤人数"> </el-table-column>
        <el-table-column prop="notWorkNum" label="近10日未出勤人数"> </el-table-column>
        <el-table-column prop="activeRate" label="近10日人员平均活跃率"> </el-table-column>
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
  @Prop({ type: String, required: true }) readonly siteId!: string;
  @Prop({ type: String, required: true }) readonly siteName!: string;
  @Prop({ type: String, required: true }) readonly companyId!: string;
  @Prop({ type: String, required: true }) readonly companyName!: string;
  breadItems = [
    { name: "劳务管理", path: "" },
    { name: "人员管理", path: "/laborManagement/people" },
    { name: "人员活跃度", path: "" },
    { name: this.siteName, path: `/laborManagement/people/${this.siteId}/activeAccount?site=${this.siteName}` },
    { name: this.companyName, path: ""}
  ];

  tableData = [
    {
      team: "钢筋",
      teamLeader: "张志",
      totalNum: 40,
      workNum: 20,
      notWorkNum: 20,
      activeRate: "50%"
    },
    {
      team: "钢筋",
      teamLeader: "张志",
      totalNum: 40,
      workNum: 20,
      notWorkNum: 20,
      activeRate: "50%"
    },
    {
      team: "钢筋",
      teamLeader: "张志",
      totalNum: 40,
      workNum: 20,
      notWorkNum: 20,
      activeRate: "50%"
    },
    {
      team: "钢筋",
      teamLeader: "张志",
      totalNum: 40,
      workNum: 20,
      notWorkNum: 20,
      activeRate: "50%"
    },
    {
      team: "钢筋",
      teamLeader: "张志",
      totalNum: 40,
      workNum: 20,
      notWorkNum: 20,
      activeRate: "50%"
    },
    {
      team: "钢筋",
      teamLeader: "张志",
      totalNum: 40,
      workNum: 20,
      notWorkNum: 20,
      activeRate: "50%"
    },
    {
      team: "钢筋",
      teamLeader: "张志",
      totalNum: 40,
      workNum: 20,
      notWorkNum: 20,
      activeRate: "50%"
    },
    {
      team: "钢筋",
      teamLeader: "张志",
      totalNum: 40,
      workNum: 20,
      notWorkNum: 20,
      activeRate: "50%"
    },
    {
      team: "钢筋",
      teamLeader: "张志",
      totalNum: 40,
      workNum: 20,
      notWorkNum: 20,
      activeRate: "50%"
    },
    {
      team: "钢筋",
      teamLeader: "张志",
      totalNum: 40,
      workNum: 20,
      notWorkNum: 20,
      activeRate: "50%"
    },
  ];

  selectRow(row) {
    this.$router.push(
      `/laborManagement/people/${this.siteId}/activeAccount/${this.companyId}/${row.id}?site=${this.siteName}&company=${this.companyName}&team=${row.team}`
    );
  }
}
</script>

<style scoped lang="stylus"></style>
