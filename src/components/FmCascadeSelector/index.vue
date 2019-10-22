<template>
  <div class="fm-cascade-selector">
    <el-select v-model="value" filterable placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    ->
    <el-select v-model="value" filterable placeholder="请选择">
      <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model } from "vue-property-decorator";

@Component
export default class FmCascadeSelect extends Vue {
  public value:String = "fdfad";
  public options: Array<any> = [
    {
      value: "选项1",
      label: "黄金糕"
    },
    {
      value: "选项2",
      label: "双皮奶"
    },
    {
      value: "选项3",
      label: "蚵仔煎"
    },
    {
      value: "选项4",
      label: "龙须面"
    },
    {
      value: "选项5",
      label: "北京烤鸭"
    }
  ];

}
</script>

<style scoped lang="stylus">
  .fm-cascade-selector
    display inline-block
    position: relative;

</style>
