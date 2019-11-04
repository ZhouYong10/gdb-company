<template>
  <fm-title-container :title="title">
    <template v-slot:content>
      <v-chart
        class="chart"
        :initOptions="{ width: 'auto', height: 'auto' }"
        :options="options"
        :autoresize="true"
      ></v-chart>
    </template>
  </fm-title-container>
</template>

<script lang="ts">
import Echarts from "vue-echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";
import { Vue, Component, Prop } from "vue-property-decorator";
import FmMoreDetails from "@/components/FmMoreDetails/index.vue";
import FmTitleContainer from "@/components/FmTitleContainer/index.vue";
interface SeriesData {
  name: string;
  type: string;
  barWidth: string;
  color: string;
  data: Array<number>;
}
@Component({
  name: "FmSimpleBarChart",
  components: {
    FmTitleContainer,
    FmMoreDetails,
    "v-chart": Echarts
  }
})
export default class FmSimpleBarChart extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: String, required: true }) readonly tooltipFormatter!: string;
  @Prop({ type: Array, required: true }) readonly xAxis!: Array<string>;
  @Prop({ type: Array, required: true }) readonly series!: Array<SeriesData>;
  get options() {
    return {
      legend: {
        right: 0
      },
      tooltip: {
        trigger: "axis",
        formatter: this.tooltipFormatter,
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
          data: this.xAxis,
          axisTick: {
            alignWithLabel: false
          }
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: this.series
    };
  }
}
</script>

<style scoped lang="stylus">
.simple-bar-chart
.chart
    width 100%
    height 240px
    overflow hidden
</style>
