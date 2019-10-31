<template>
  <div class="fm-range-select">
    <el-input-number
      class="range-input"
      ref="rangeStart"
      :min="min"
      :max="max"
      :precision="precision"
      :controls="false"
      size="mini"
      :placeholder="startPlaceholder"
      @blur="changeStart"
    ></el-input-number>
    <span> - </span>
    <el-input-number
      class="range-input"
      ref="rangeEnd"
      :min="min"
      :max="max"
      :precision="precision"
      :controls="false"
      size="mini"
      :placeholder="endPlaceholder"
      @blur="changeEnd"
    ></el-input-number>
    <el-button type="primary" size="mini" @click="selected" :disabled="active">确定</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
@Component({
  name: "FmRangeSelect"
})
export default class FmRangeSelect extends Vue {
  @Prop({ type: Number, required: true }) readonly precision!: number;
  @Prop({ type: Number, required: true }) readonly min!: number;
  @Prop({ type: Number, required: true }) readonly max!: number;
  @Prop({ type: String, default: "起始数字" }) readonly startPlaceholder?: string;
  @Prop({ type: String, default: "结束数字" }) readonly endPlaceholder?: string;
  start = 0;
  end = 0;
  active = true;
  $startTarget = null;
  $endTarget = null;

  changeStart(e) {
    let $start = (this.$startTarget = e.target);
    let start = parseInt($start.value);
    this.end && start > this.end
      ? ($start.value = this.start = this.end)
      : (this.start = start);
    this.validate();
  }

  changeEnd(e) {
    let $end = (this.$endTarget = e.target);
    let end = parseInt($end.value);
    this.start && end < this.start
      ? ($end.value = this.end = this.start)
      : (this.end = end);
    this.validate();
  }

  validate() {
    this.active = !(this.start && this.end && this.end >= this.start);
  }

  @Emit()
  selected() {
    return {start: this.start, end: this.end};
  }

  reset() {
    if (!this.active) {
      this.$startTarget.value = "";
      this.$endTarget.value = "";
      this.start = 0;
      this.end = 0;
      this.active = true;
    }
  }
}
</script>

<style scoped lang="stylus">
.fm-range-select
  display flex
  justify-content space-around
  align-items center
  width 260px
  margin-bottom 12px
  .range-input
    width 80px
</style>
