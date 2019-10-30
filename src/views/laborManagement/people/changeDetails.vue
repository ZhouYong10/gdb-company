<template>
  <div class="page-container">
    <fm-breadcrumb :items="breadItems" />
    <el-main class="page-content">
      <el-col class="choose-date">
        <el-radio-group v-model="dateScope" size="mini">
          <el-radio-button label="today">今日</el-radio-button>
          <el-radio-button label="week">近一周</el-radio-button>
          <el-radio-button label="month">近一月</el-radio-button>
        </el-radio-group>
      </el-col>
      <el-table :data="tableData" stripe height="calc(100% - 28px)" width="100%" @cell-click="selectCell">
        <el-table-column type="index" min-width="80px"></el-table-column>
        <el-table-column prop="site" min-width="160px" label="项目名称"> </el-table-column>
        <el-table-column prop="inNum" min-width="100px" label="进场人数">
          <template slot-scope="scope">
            <div style="cursor: pointer;">{{scope.row.inNum}}</div>
          </template>
        </el-table-column>
        <el-table-column prop="outNum" min-width="100px" label="退场人数">
          <template slot-scope="scope">
            <div style="cursor: pointer;">{{scope.row.outNum}}</div>
          </template>
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
  breadItems = [
    { name: "劳务管理", path: "" },
    { name: "人员管理", path: "/laborManagement/people" },
    { name: "人员变动详情", path: "" }
  ];
  dateScope = "today";
  tableData = [
    {
      id: "1",
      site: "项目名称11",
      inNum: 12,
      outNum: 20
    },
    {
      id: "2",
      site: "项目名称9",
      inNum: 12,
      outNum: 20
    },
    {
      id: "3",
      site: "项目名称8",
      inNum: 12,
      outNum: 20
    },
    {
      id: "4",
      site: "项目名称7",
      inNum: 12,
      outNum: 20
    },
    {
      id: "5",
      site: "项目名称6",
      inNum: 12,
      outNum: 20
    },
    {
      id: "6",
      site: "项目名称5",
      inNum: 12,
      outNum: 20
    },
    {
      id: "7",
      site: "项目名称4",
      inNum: 12,
      outNum: 20
    },
    {
      id: "8",
      site: "项目名称3",
      inNum: 12,
      outNum: 20
    },
    {
      id: "9",
      site: "项目名称2",
      inNum: 12,
      outNum: 20
    },
    {
      id: "10",
      site: "项目名称1",
      inNum: 12,
      outNum: 20
    }
  ];

  selectCell(row, col) {
    if (col.property === "inNum") {
      this.$router.push(`/laborManagement/people/changeDetails/enter/${row.id}?site=${row.site}`);
    } else if (col.property === "outNum") {
      this.$router.push(`/laborManagement/people/changeDetails/out/${row.id}?site=${row.site}`);
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
