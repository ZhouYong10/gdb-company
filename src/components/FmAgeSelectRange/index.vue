<template>
  <div class="age-select-range">
    <fm-radio-list
      :title="ageList.title"
      :items="ageList.items"
      :value="ageSelected"
      @change="radioChange"
    />
    <fm-range-select
      ref="ageRange"
      :precision="0"
      :min="18"
      :max="100"
      startPlaceholder="起始年龄"
      endPlaceholder="结束年龄"
      @selected="rangeChange"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import FmRadioList from "@/components/FmRadioList/index.vue";
import FmRangeSelect from "@/components/FmRangeSelect/index.vue";
@Component({
  name: "FmAgeSelectRange",
  components: {
    FmRangeSelect,
    FmRadioList
  }
})
export default class FmAgeSelectRange extends Vue {
  /*当前选中的年龄段*/
  ageSelected = { name: "不限", id: "0", value: { start: 18, end: 100 } };
  /*年龄列表*/
  ageList = {
    title: "年龄",
    items: [
      { name: "不限", id: "0", value: { start: 18, end: 100 } },
      { name: "18-35岁", id: "1", value: { start: 18, end: 35 } },
      { name: "36-45岁", id: "2", value: { start: 36, end: 45 } },
      { name: "46-55岁", id: "3", value: { start: 46, end: 55 } },
      { name: "56岁以上", id: "4", value: { start: 56, end: 100 } }
    ]
  };

  radioChange(val) {
    this.ageSelected = val;
    (this.$refs.ageRange as any).reset();
    this.selected(val.value);
  }

  rangeChange(val) {
    this.ageSelected = { name: "", id: "", value: { start: 0, end: 0 } };
    this.selected(val);
  }

  @Emit()
  selected(val) {}
}
</script>

<style scoped lang="stylus">
.age-select-range
  display flex
  align-items center
</style>
