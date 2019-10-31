<template>
  <el-row class="fm-percent-bar" type="flex" justify="center" align="middle">
    <el-col :span="6" class="text-box">
      <p class="percentage">{{ percentage }}%</p>
      <span class="desc">{{ desc }}</span>
    </el-col>
    <el-col :span="18">
      <el-progress
        :text-inside="true"
        :stroke-width="height"
        :percentage="percentage"
        :color="color"
      ></el-progress>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "FmPercentBar"
})
export default class FmPercentBar extends Vue {
  @Prop(Number) readonly height?: number;
  @Prop({ type: Number, required: true }) readonly percentage!: number;
  @Prop({ type: String, required: true }) readonly desc!: string;
  @Prop(String) readonly color?: string;
}
</script>

<style scoped lang="stylus">
    .fm-percent-bar
        padding 4px
    .text-box
        margin-right 12px
        border-right 1px solid #a0a5a5
.percentage
    margin 3px
    font-size 1.1em
    font-weight bold
.desc
    font-size 0.6em
    color #a0a5a5
</style>
