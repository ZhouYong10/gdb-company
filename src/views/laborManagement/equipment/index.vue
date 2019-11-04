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
      class="dialog-equipment-info"
      width="fit-content"
      :center="true"
      :visible.sync="dEquipInfoVisible"
    >
      <el-form
        :inline="true"
        :model="dEquipInfoModel"
        :rules="dEquipInfoRules"
        size="mini"
        ref="dEquipInfo"
        label-width="120px"
      >
        <h4 class="inline-title">设备信息</h4>
        <el-form-item label="设备所在项目: ">
          <span class="plain-text">{{ dEquipInfoModel.site }}</span>
        </el-form-item>
        <el-form-item label="设备所在地: ">
          <span class="plain-text">{{ dEquipInfoModel.local }}</span>
        </el-form-item>
        <h4 class="inline-title">设备管理员信息</h4>
        <el-form-item label="设备管理人员" prop="name">
          <el-input v-model="dEquipInfoModel.manager"></el-input>
        </el-form-item>
        <el-form-item label="责任人电话" prop="phone">
          <el-input v-model="dEquipInfoModel.managerPhone"></el-input>
        </el-form-item>
        <h4 class="inline-title">设备供应商信息</h4>
        <el-form-item label="设备供应商" prop="provider">
          <el-input v-model="dEquipInfoModel.provider"></el-input>
        </el-form-item>
        <el-form-item label="联系人员" prop="linkman">
          <el-input v-model="dEquipInfoModel.providerName"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="linkPhone">
          <el-input v-model="dEquipInfoModel.providerPhone"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button size="small" type="primary" @click="dEquipInfoSave">保存</el-button>
        <el-button size="small" @click="dEquipInfoCancle">取消</el-button>
      </span>
    </el-dialog>
    <!--增加接入平台的弹窗-->
    <el-dialog
      title="增加接入平台"
      class="dialog-add-platform"
      :center="true"
      :visible.sync="dAddEquipVisible"
      width="30%"
    >
      <h4 style="margin: 8px 0 12px 0;">
        请填写系统已接入的平台,如: 成都市建委
      </h4>
      <el-form
        :model="dAddEquipModel"
        size="mini"
        ref="dAddEquip"
        label-width="100px"
      >
        <el-form-item
          v-for="(plat, index) in dAddEquipModel.platforms"
          :key="index"
          :label="`平台名称${index+1}`"
          :prop="`platforms.${index}.value`"
          :rules="[
            { required: true, message: '平台名称不能为空!', trigger: 'blur' },
            { max: 10, message: '输入最大不能超过10个字符!', trigger: ['blur', 'change']}
          ]"
        >
          <el-input v-model="plat.value"></el-input>
          <el-button size="mini" @click.stop.prevent="removePlat(plat)" v-if="index !== 0">删除</el-button>
        </el-form-item>
        <div class="new-platform-input">
          <el-button size="mini" @click.stop.prevent="addPlat">新增平台</el-button>
        </div>
      </el-form>
      <span slot="footer">
        <el-button size="small" type="primary" @click="dAddEquipSave">保存</el-button>
        <el-button size="small" @click="dAddEquipCancle">取消</el-button>
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
import fa from "element-ui/src/locale/lang/fa";

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

  /*显示/修改设备信息弹框*/
  dEquipInfoVisible = false;
  dEquipInfoModel = {
    site: "A2项目J2标段",
    local: "成都市",
    manager: "",
    managerPhone: "",
    provider: "",
    providerName: "",
    providerPhone: ""
  };
  dEquipInfoRules = {

  };
  showEquipmentInfo(row) {
    this.dEquipInfoVisible = true;
  }

  dEquipInfoSave() {
    (this.$refs.dEquipInfo as any).validate(valid => {
      if (valid) {
        console.log("设备信息表单可以提交了");
      }else{
        return false;
      }
    });
  }

  dEquipInfoCancle() {
    this.dEquipInfoVisible = false;
  }

  /*显示/添加接入平台弹框*/
  dAddEquipVisible = false;
  dAddEquipId = 0;
  dAddEquipModel = {
    platforms: []
  };
  addPlatform(row) {
    const platforms = row.platform.split(" ");
    this.dAddEquipId = platforms.length;
    this.dAddEquipModel.platforms = platforms.map((platform, index) =>({id: ++index, value: platform}));
    this.dAddEquipVisible = true;
  }
  removePlat(plat){
    let index = this.dAddEquipModel.platforms.findIndex(platform => {
      return platform.id === plat.id;
    });
    if (index !== -1) {
      this.dAddEquipModel.platforms.splice(index, 1);
    }
  }

  addPlat() {
    this.dAddEquipModel.platforms.push({ id: ++(this.dAddEquipId), value: "" });
  }

  dAddEquipSave() {
    (this.$refs.dAddEquip as any).validate(valid => {
      if (valid) {
        console.log("表单可以提交了");
      }else{
        return false;
      }
    });
  }

  dAddEquipCancle() {
    this.dAddEquipVisible = false;
  }
}
</script>

<style scoped lang="stylus">
.chart
  height 200px
  width 100%
.equipment-info-table
  margin-top 16px
.dialog-equipment-info
  .inline-title
    margin 8px
  .plain-text
    font-weight bold
.dialog-add-platform
  .new-platform-input
    display flex
    justify-content flex-end
</style>
