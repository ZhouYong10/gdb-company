<template>
  <fm-title-container class="fm-percent-box" :title="title">
    <template v-slot:content>
      <fm-percent-bar
        v-for="(item, index) in datas"
        :key="index"
        :height="barHeight"
        :color="item.color"
        :percentage="item.percentage"
        :desc="item.desc"
      />
    </template>
  </fm-title-container>
</template>

<script lang="ts">
import FmPercentBar from "@/components/FmPercentBar/index.vue";
import { Vue, Component, Prop } from "vue-property-decorator";
import FmTitleContainer from "@/components/FmTitleContainer/index.vue";
interface PercentBar {
  percentage: number;
  desc: string;
  color: string;
}
@Component({
  name: "FmPercentBox",
  components: {
    FmTitleContainer,
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
.fm-percent-box
  border none
  box-shadow none
</style>
