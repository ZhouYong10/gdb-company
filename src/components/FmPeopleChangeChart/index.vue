<template>
  <el-row class="people-change-chart">
    <el-col>
      <header>
        <h3 class="title">人员变动统计</h3>
        <fm-more-details :path="'#'" />
      </header>
    </el-col>
    <el-col class="choose-date">
      <el-button-group>
        <el-button size="mini">今日</el-button>
        <el-button size="mini">近一周</el-button>
        <el-button size="mini">近一月</el-button>
      </el-button-group>
    </el-col>
    <el-col>
      <v-chart
        class="chart"
        :initOptions="{ width: 'auto', height: 'auto' }"
        :options="option"
        :autoresize="true"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Echarts from "vue-echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import { Vue, Component, Prop } from "vue-property-decorator";
import FmMoreDetails from "@/components/FmMoreDetails/index.vue";
@Component({
  name: "FmPeopleChangeChar",
  components: {
    FmMoreDetails,
    "v-chart": Echarts
  }
})
export default class FmPeopleChangeChar extends Vue {
  get option() {
    return {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999"
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ["蒸发量", "降水量", "平均温度"]
      },
      xAxis: [
        {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          axisPointer: {
            type: "shadow"
          }
        }
      ],
      yAxis: [
        {
          type: "value",
          name: "水量",
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: "{value} ml"
          }
        },
        {
          type: "value",
          name: "温度",
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: "{value} °C"
          }
        }
      ],
      series: [
        {
          name: "蒸发量",
          type: "bar",
          data: [
            2.0,
            4.9,
            7.0,
            23.2,
            25.6,
            76.7,
            135.6,
            162.2,
            32.6,
            20.0,
            6.4,
            3.3
          ]
        },
        {
          name: "降水量",
          type: "bar",
          data: [
            2.6,
            5.9,
            9.0,
            26.4,
            28.7,
            70.7,
            175.6,
            182.2,
            48.7,
            18.8,
            6.0,
            2.3
          ]
        },
        {
          name: "平均温度",
          type: "line",
          yAxisIndex: 1,
          data: [
            2.0,
            2.2,
            3.3,
            4.5,
            6.3,
            10.2,
            20.3,
            23.4,
            23.0,
            16.5,
            12.0,
            6.2
          ]
        }
      ]
    };
  }
}
</script>

<style scoped lang="stylus">
.people-change-chart
    height 100%
    header
        display flex
        justify-content space-between
        padding 4px 4px 10px
        .title
            margin 0
            font-size 1em
    .choose-date
        display flex
        justify-content flex-end
    .chart
      width 100%
      height 240px
      overflow hidden
</style>
