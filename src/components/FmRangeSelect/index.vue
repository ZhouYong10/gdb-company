<template>
  <div class="fm-range-select">
    <el-input-number
      class="range-input"
      v-model="start"
      :min="18"
      :max="100"
      :precision="0"
      :controls="false"
      size="mini"
    ></el-input-number>
    <span> - </span>
    <el-input-number
      class="range-input"
      v-model="end"
      :min="18"
      :max="100"
      :precision="0"
      :controls="false"
      size="mini"
    ></el-input-number>
    <el-button type="primary" size="mini">确定</el-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "FmRangeSelect"
})
export default class FmRangeSelect extends Vue {
  start = 19;
  end = 99;
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
