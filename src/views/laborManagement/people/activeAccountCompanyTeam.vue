<template>
  <div class="page-container">
    <fm-breadcrumb :items="breadItems" />
    <el-main class="page-content">
      <el-table
        :data="tableData"
        stripe
        height="100%"
        width="100%"
      >
        <el-table-column type="index" min-width="30px"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="sex" label="性别"> </el-table-column>
        <el-table-column prop="nation" label="民族"> </el-table-column>
        <el-table-column prop="idCard" label="身份证">
        </el-table-column>
        <el-table-column prop="profession" label="岗位">
        </el-table-column>
        <el-table-column prop="active" label="活跃">
        </el-table-column>
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
  @Prop({ type: String, required: true }) readonly teamId!: string;
  @Prop({ type: String, required: true }) readonly teamName!: string;
  breadItems = [
    { name: "劳务管理", path: "" },
    { name: "人员管理", path: "/laborManagement/people" },
    { name: "人员活跃度", path: "" },
    {
      name: this.siteName,
      path: `/laborManagement/people/${this.siteId}/activeAccount?site=${this.siteName}`
    },
    {
      name: this.companyName,
      path: `/laborManagement/people/${this.siteId}/activeAccount/${this.companyId}?site=${this.siteName}&company=${this.companyName}`
    },
    { name: this.teamName, path: "" }
  ];

  tableData = [
    {
      name: "张志",
      sex: "男",
      nation: "汉族",
      idCard: "124374877243******",
      profession: "助理",
      active: "是"
    },
    {
      name: "张志",
      sex: "男",
      nation: "汉族",
      idCard: "124374877243******",
      profession: "助理",
      active: "是"
    },
    {
      name: "张志",
      sex: "男",
      nation: "汉族",
      idCard: "124374877243******",
      profession: "助理",
      active: "是"
    },
    {
      name: "张志",
      sex: "男",
      nation: "汉族",
      idCard: "124374877243******",
      profession: "助理",
      active: "是"
    },
    {
      name: "张志",
      sex: "男",
      nation: "汉族",
      idCard: "124374877243******",
      profession: "助理",
      active: "是"
    },
    {
      name: "张志",
      sex: "男",
      nation: "汉族",
      idCard: "124374877243******",
      profession: "助理",
      active: "是"
    },
    {
      name: "张志",
      sex: "男",
      nation: "汉族",
      idCard: "124374877243******",
      profession: "助理",
      active: "是"
    },
    {
      name: "张志",
      sex: "男",
      nation: "汉族",
      idCard: "124374877243******",
      profession: "助理",
      active: "是"
    },
    {
      name: "张志",
      sex: "男",
      nation: "汉族",
      idCard: "124374877243******",
      profession: "助理",
      active: "是"
    },
    {
      name: "张志",
      sex: "男",
      nation: "汉族",
      idCard: "124374877243******",
      profession: "助理",
      active: "是"
    }
  ];
}
</script>

<style scoped lang="stylus"></style>
