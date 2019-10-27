<template>
  <div class="fm-percent-box">
    <h1 class="title">{{ title }}</h1>
    <fm-percent-bar
      v-for="(item, index) in datas"
      :key="index"
      :height="barHeight"
      :color="item.color"
      :percentage="item.percentage"
      :desc="item.desc"
    />
  </div>
</template>

<script lang="ts">
import FmPercentBar from "@/components/FmPercentBar/index.vue";
import { Vue, Component, Prop } from "vue-property-decorator";
interface PercentBar {
  percentage: number;
  desc: string;
  color: string;
}
@Component({
  name: "FmPercentBox",
  components: {
    FmPercentBar
  }
})
export default class FmPercentBox extends Vue {
  @Prop(Number) readonly barHeight?: number;
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: Array, required: true }) readonly datas!: Array<PercentBar>;
}
</script>

<style scoped lang="stylus">
.title
    margin 0 0 8px 10px
    font-size 1em
</style>
