<template>
  <div class="page-container">
    <fm-breadcrumb :items="breadItems" />
    <el-main class="page-content">
      <el-row :gutter="12">
        <el-col :span="8">
          <fm-title-container title="设备安装情况">
            <template v-slot:content>
              <v-chart
                class="chart"
                :initOptions="{ width: 'auto', height: 'auto' }"
                :options="installData"
                :autoresize="true"
              />
            </template>
          </fm-title-container>
        </el-col>
        <el-col :span="8">
          <fm-title-container title="设备数量统计">
            <template v-slot:content>
              <v-chart
                class="chart"
                :initOptions="{ width: 'auto', height: 'auto' }"
                :options="accountData"
                :autoresize="true"
              />
            </template>
          </fm-title-container>
        </el-col>
        <el-col :span="8">
          <fm-title-container title="设备运行状态">
            <template v-slot:content>
              <v-chart
                class="chart"
                :initOptions="{ width: 'auto', height: 'auto' }"
                :options="runtimeData"
                :autoresize="true"
              />
            </template>
          </fm-title-container>
        </el-col>
      </el-row>
      <el-table class="equipment-info-table" :data="tableData" stripe>
        <el-table-column type="index"> </el-table-column>
        <el-table-column prop="site" label="项目"> </el-table-column>
        <el-table-column prop="siteLocal" label="项目所在地"> </el-table-column>
        <el-table-column prop="num" label="设备数量"> </el-table-column>
        <el-table-column prop="onLineNum" label="在线"> </el-table-column>
        <el-table-column prop="outLineNum" label="离线"> </el-table-column>
        <el-table-column prop="platform" label="接入平台"> </el-table-column>
        <el-table-column label="操作" align="center" width="260">
          <template slot-scope="scope">
            <el-button
              type="success"
              plain
              size="mini"
              @click="showEquipmentInfo(scope.row)"
              >查看设备信息</el-button
            >
            <el-button
              type="primary"
              plain
              size="mini"
              @click="addPlatform(scope.row)"
              >增加接入平台</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <!--显示设备信息的弹窗-->
    <el-dialog
      title="设备信息"
      :center="true"
      :visible.sync="dEquipInfoVisible">
      <el-form :inline="true" :model="dEquipInfoModel" :rules="dEquipInfoRules" ref="dEquipInfo" label-width="120px" >
        <h5>设备信息</h5>
        <el-form-item label="设备所在项目: ">
          <span>{{dEquipInfoModel.site}}</span>
        </el-form-item>
        <el-form-item label="设备所在地: ">
          <span>{{dEquipInfoModel.local}}</span>
        </el-form-item>
        <h5>设备管理员信息</h5>
        <el-form-item label="设备管理人员" prop="name">
          <el-input v-model="dEquipInfoModel.name"></el-input>
        </el-form-item>
        <el-form-item label="责任人电话" prop="phone">
          <el-input v-model="dEquipInfoModel.phone"></el-input>
        </el-form-item>
        <h5>设备供应商信息</h5>
        <el-form-item label="设备供应商" prop="provider">
          <el-input v-model="dEquipInfoModel.provider"></el-input>
        </el-form-item>
        <el-form-item label="联系人员" prop="linkman">
          <el-input v-model="dEquipInfoModel.linkman"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="linkPhone">
          <el-input v-model="dEquipInfoModel.linkPhone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button size="small">取消</el-button>
        <el-button size="small" type="primary" >保存</el-button>
      </span>
    </el-dialog>
    <!--增加接入平台的弹窗-->
    <el-dialog
      title="增加接入平台"
      :center="true"
      :visible.sync="dAddEquipVisible"
      width="30%">
      <span>请填写系统已接入的平台,如: 成都市建委</span>
      <el-form :model="dAddEquipModel" :rules="dAddEquipRules" ref="dAddEquip" label-width="100px" >
        <el-form-item label="平台名称" prop="name">
          <el-input v-model="dAddEquipModel.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button size="small">取消</el-button>
        <el-button size="small" type="primary" >保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FmBreadcrumb from "@/components/FmBreadcrumb/index.vue";
import FmTitleContainer from "@/components/FmTitleContainer/index.vue";
import FmMoreDetails from "@/components/FmMoreDetails/index.vue";
import { ProgressCircle } from "vue-progress-circle";
import Echarts from "vue-echarts";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

@Component({
  components: {
    FmMoreDetails,
    FmTitleContainer,
    FmBreadcrumb,
    ProgressCircle,
    "v-chart": Echarts
  }
})
export default class extends Vue {
  breadItems = [{ name: "劳务管理", path: "" }, { name: "设备管理", path: "" }];
  installData = {
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "vertical",
      top: 0,
      right: 0
    },
    series: [
      {
        type: "pie",
        name: "设备安装情况",
        radius: "80%",
        center: ["50%", "50%"],
        roseType: "radius",
        label: { formatter: "{c}" },
        data: [
          { name: "已安装项目", value: 12, itemStyle: { color: "#60B3EB" } },
          { name: "未安装项目", value: 8, itemStyle: { color: "#FA827F" } }
        ]
      }
    ]
  };
  accountData = {
    color: ["#3398DB"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "60%",
        data: [10, 52, 200, 334, 390, 330, 220]
      }
    ]
  };
  runtimeData = {
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "vertical",
      top: 0,
      right: 0
    },
    series: [
      {
        type: "pie",
        name: "设备安装情况",
        radius: "80%",
        center: ["50%", "50%"],
        roseType: "radius",
        label: { formatter: "{c}" },
        data: [
          { name: "在线设备", value: 12, itemStyle: { color: "#60B3EB" } },
          { name: "离线设备", value: 8, itemStyle: { color: "#FA827F" } }
        ]
      }
    ]
  };
  tableData = [
    {
      site: "A2项目J2标段",
      siteLocal: "四川",
      num: 20,
      onLineNum: 11,
      outLineNum: 19,
      platform: "成都市建委 成都市建工 云筑"
    },
    {
      site: "A2项目J2标段",
      siteLocal: "四川",
      num: 20,
      onLineNum: 11,
      outLineNum: 19,
      platform: "成都市建委 成都市建工 云筑"
    },
    {
      site: "A2项目J2标段",
      siteLocal: "四川",
      num: 20,
      onLineNum: 11,
      outLineNum: 19,
      platform: "成都市建委 成都市建工 云筑"
    },
    {
      site: "A2项目J2标段",
      siteLocal: "四川",
      num: 20,
      onLineNum: 11,
      outLineNum: 19,
      platform: "成都市建委 成都市建工 云筑"
    }
  ];

  dEquipInfoVisible = false;
  dEquipInfoModel = {site: "A2项目J2标段", local: "成都市",name: "", phone: "", provider: "", linkman: "", linkPhone: ""};
  dEquipInfoRules = {};
  dAddEquipVisible = false;
  dAddEquipModel = {name: ""};
  dAddEquipRules = {};
  showEquipmentInfo(row) {
    this.dEquipInfoVisible = true;
  }

  addPlatform(row) {
    this.dAddEquipVisible = true;
  }
}
</script>

<style scoped lang="stylus">
.chart
  height 200px
  width 100%
.equipment-info-table
  margin-top 16px
</style>
