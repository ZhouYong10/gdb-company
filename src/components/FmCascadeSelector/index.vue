<template>
  <div class="fm-cascade-selector" ref="selector">
    <el-popover
      @show="companyShow"
      @hide="companyHide"
      placement="bottom"
      :disabled="comDis"
      v-model="visibleCom"
      trigger="click">
      <fm-search-list :datas="options" :filtering-policy="search" :chooseItem="chooseItem" @selected="selectCom" v-slot="{item}">
        {{item.label}}
      </fm-search-list>
      <span class="show-info" slot="reference">
        {{selectedCom}}
        <i class="el-icon-caret-bottom show-icon" ref="companyIcon" v-if="!comDis"></i>
      </span>
    </el-popover>
    <span class="arrow-right">
      >
    </span>
    <el-popover
      @show="siteShow"
      @hide="siteHide"
      placement="bottom"
      :disabled="siteDis"
      v-model="visibleSite"
      trigger="click">
      <fm-search-list :datas="options" :filtering-policy="search" :chooseItem="chooseItem" @selected="selectSite" v-slot="{item}">
        {{item.label}}
      </fm-search-list>
      <span class="show-info" slot="reference">
        {{selectedSite}}
        <i class="el-icon-caret-bottom show-icon" ref="siteIcon" v-if="!siteDis"></i>
      </span>
    </el-popover>
  </div>
</template>

<script lang="ts">
import FmSearchList from "@/components/FmSearchList/index.vue";
import { Vue, Component, Model } from "vue-property-decorator";

@Component({
  name: "FmCascadeSelect",
  components: {
    FmSearchList
  }
})
export default class FmCascadeSelect extends Vue {
  options: Array<any> = [
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
    },{
      value: "选项41",
      label: "龙须面"
    },{
      value: "选项42",
      label: "龙须面"
    },{
      value: "选项43",
      label: "龙须面"
    },{
      value: "选项44",
      label: "龙须面"
    },{
      value: "选项45",
      label: "龙须面"
    },{
      value: "选项46",
      label: "龙须面"
    },{
      value: "选项74",
      label: "龙须面"
    },{
      value: "选项84",
      label: "龙须面"
    },{
      value: "选项49",
      label: "龙须面"
    },{
      value: "选项40",
      label: "龙须面"
    },{
      value: "选项14",
      label: "龙须面"
    },{
      value: "选项24",
      label: "龙须面"
    },
    {
      value: "选项5",
      label: "天府新区消防治安及气象综合服务中心项目（交警七分局、正兴派出所）"
    }
  ];
  comDis: boolean = false;
  siteDis:boolean = false;
  visibleCom: boolean = false;
  visibleSite: boolean = false;
  selectedCom:string = "当前选择的公司";
  selectedSite:string = "当前选择的工地";

  search(item: any, val: string) {
    return val.trim() === ""
      ? true
      : item.label.toLowerCase().indexOf(val.toLowerCase()) !== -1;
  }

  chooseItem(el: HTMLElement) {
    return el.textContent;
  }

  selectCom(val: string) {
    this.selectedCom = val;
    this.visibleCom = false;
  }

  selectSite(val: string) {
    this.selectedSite = val;
    this.visibleSite = false;
  }

  companyShow() {
    (this.$refs.companyIcon as HTMLElement).classList.add('rotate-up');
  }

  companyHide() {
    (this.$refs.companyIcon as HTMLElement).classList.remove('rotate-up');
  }

  siteShow() {
    (this.$refs.siteIcon as HTMLElement).classList.add('rotate-up');
  }

  siteHide() {
    (this.$refs.siteIcon as HTMLElement).classList.remove('rotate-up');
  }
}
</script>

<style scoped lang="stylus">
.show-info
  cursor pointer
  color white
  transition width 0.5
.arrow-right
  padding 0 6px
  color white
.show-icon
  transition all 0.5s
  font-size 1.3em
  position relative
  bottom -2px
.rotate-up
  transform rotate(180deg)
</style>
