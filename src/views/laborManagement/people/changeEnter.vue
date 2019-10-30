<template>
  <div class="page-container">
    <fm-breadcrumb :items="breadItems" />
    <el-main class="page-content">
      <el-table :data="tableData" stripe height="100%" width="100%">
        <el-table-column type="index" min-width="30px"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="sex" label="性别"> </el-table-column>
        <el-table-column prop="profession" label="工种"> </el-table-column>
        <el-table-column prop="nation" label="民族"> </el-table-column>
        <el-table-column prop="idCard" label="身份证"> </el-table-column>
        <el-table-column prop="company" label="单位"> </el-table-column>
        <el-table-column prop="team" label="班组"> </el-table-column>
        <el-table-column prop="time" label="进场时间"> </el-table-column>
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
  breadItems = [
    { name: "劳务管理", path: "" },
    { name: "人员管理", path: "/laborManagement/people" },
    { name: "人员变动详情", path: "/laborManagement/people/changeDetails" },
    { name: this.siteName, path: "" },
    { name: "今日进场详情", path: "" }
  ];

  tableData = [
    {
      avatar: "",
      name: "张志",
      sex: "男",
      profession: "木工",
      nation: "汉族",
      idCard: "513123192846******",
      company: "五冶1公司",
      team: "木工组",
      time: "2019-07010 10:34"
    },
    {
      avatar: "",
      name: "张志",
      sex: "男",
      profession: "木工",
      nation: "汉族",
      idCard: "513123192846******",
      company: "五冶1公司",
      team: "木工组",
      time: "2019-07010 10:34"
    },
    {
      avatar: "",
      name: "张志",
      sex: "男",
      profession: "木工",
      nation: "汉族",
      idCard: "513123192846******",
      company: "五冶1公司",
      team: "木工组",
      time: "2019-07010 10:34"
    },
    {
      avatar: "",
      name: "张志",
      sex: "男",
      profession: "木工",
      nation: "汉族",
      idCard: "513123192846******",
      company: "五冶1公司",
      team: "木工组",
      time: "2019-07010 10:34"
    },
    {
      avatar: "",
      name: "张志",
      sex: "男",
      profession: "木工",
      nation: "汉族",
      idCard: "513123192846******",
      company: "五冶1公司",
      team: "木工组",
      time: "2019-07010 10:34"
    },
    {
      avatar: "",
      name: "张志",
      sex: "男",
      profession: "木工",
      nation: "汉族",
      idCard: "513123192846******",
      company: "五冶1公司",
      team: "木工组",
      time: "2019-07010 10:34"
    },
    {
      avatar: "",
      name: "张志",
      sex: "男",
      profession: "木工",
      nation: "汉族",
      idCard: "513123192846******",
      company: "五冶1公司",
      team: "木工组",
      time: "2019-07010 10:34"
    },
    {
      avatar: "",
      name: "张志",
      sex: "男",
      profession: "木工",
      nation: "汉族",
      idCard: "513123192846******",
      company: "五冶1公司",
      team: "木工组",
      time: "2019-07010 10:34"
    },
    {
      avatar: "",
      name: "张志",
      sex: "男",
      profession: "木工",
      nation: "汉族",
      idCard: "513123192846******",
      company: "五冶1公司",
      team: "木工组",
      time: "2019-07010 10:34"
    },
    {
      avatar: "",
      name: "张志",
      sex: "男",
      profession: "木工",
      nation: "汉族",
      idCard: "513123192846******",
      company: "五冶1公司",
      team: "木工组",
      time: "2019-07010 10:34"
    },
    {
      avatar: "",
      name: "张志",
      sex: "男",
      profession: "木工",
      nation: "汉族",
      idCard: "513123192846******",
      company: "五冶1公司",
      team: "木工组",
      time: "2019-07010 10:34"
    },
  ];
}
</script>

<style scoped lang="stylus"></style>
