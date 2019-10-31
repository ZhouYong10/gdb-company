<template>
  <div class="fm-cascade-selector" ref="selector">
    <el-popover
      @show="companyShow"
      @hide="companyHide"
      @after-leave="selectedComDone"
      placement="bottom"
      :disabled="comDis"
      v-model="visibleCom"
      trigger="click"
    >
      <fm-search-list
        ref="companyList"
        :datas="companys"
        :filtering-policy="searchCompany"
        @selected="selectCom"
        v-slot="{ item }"
      >
        <p
          :class="{
            'list-item-active':
              item.getCompanyTreeNode().getName() ===
              selectedCom.getCompanyTreeNode().getName()
          }"
          style="margin: 0; padding:0 8px"
        >
          {{ item.getCompanyTreeNode().getName() }}
        </p>
      </fm-search-list>
      <span class="show-info" slot="reference">
        {{ selectedCom.getCompanyTreeNode().getName() }}
        <i
          class="el-icon-caret-bottom show-icon"
          ref="companyIcon"
          v-if="!comDis"
        ></i>
      </span>
    </el-popover>
    <span class="arrow-right">
      >
    </span>
    <el-popover
      @show="siteShow"
      @hide="siteHide"
      @after-leave="selectedSiteDone"
      placement="bottom"
      :disabled="siteDis"
      v-model="visibleSite"
      trigger="click"
    >
      <fm-search-list
        ref="siteList"
        :datas="companySites"
        :filtering-policy="searchSite"
        @selected="selectSite"
        v-slot="{ item }"
      >
        <p
          :class="{
            'list-item-active': item.getName() === selectedSite.getName()
          }"
          style="margin: 0; padding:0 8px"
        >
          {{ item.getName() }}
        </p>
      </fm-search-list>
      <span class="show-info" slot="reference">
        {{ selectedSite.getName() }}
        <i
          class="el-icon-caret-bottom show-icon"
          ref="siteIcon"
          v-if="!siteDis"
        ></i>
      </span>
    </el-popover>
  </div>
</template>

<script lang="ts">
import FmSearchList from "@/components/FmSearchList/index.vue";
import { Vue, Component } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";
import {uiSmLoginResponese} from "$api_bean/web/uiSmLoginResponese";
import {SdjsBuildSite} from "$api_bean/web/SdjsBuildSite";

console.log(AppModule.currentCompany, " currentCompany=====================");
@Component({
  name: "FmCascadeSelect",
  components: {
    FmSearchList
  }
})
export default class FmCascadeSelect extends Vue {
  get companys() {
    return AppModule.companyList;
  }
  get companySites() {
    return AppModule.siteList;
  }
  get selectedCom() {
    return AppModule.currentCompany;
  }
  get selectedSite() {
    return AppModule.currentSite;
  }
  comDis: boolean = false;
  siteDis: boolean = false;
  visibleCom: boolean = false;
  visibleSite: boolean = false;

  searchCompany(item: uiSmLoginResponese, val: string) {
    return val.trim() === ""
      ? true
      : item
          .getCompanyTreeNode()
          .getName()
          .toLowerCase()
          .indexOf(val.toLowerCase()) !== -1;
  }

  searchSite(item: SdjsBuildSite, val: string) {
    return val.trim() === ""
      ? true
      : item
          .getName()
          .toLowerCase()
          .indexOf(val.toLowerCase()) !== -1;
  }

  selectCom(val: uiSmLoginResponese) {
    AppModule.changeCurrentCompany(val);
    this.visibleCom = false;
  }

  selectSite(val: SdjsBuildSite) {
    AppModule.changeCurrentSite(val);
    this.visibleSite = false;
  }

  selectedComDone() {
    (this.$refs.companyList as any).clear();
  }

  selectedSiteDone() {
    (this.$refs.siteList as any).clear();
  }
  companyShow() {
    (this.$refs.companyIcon as HTMLElement).classList.add("rotate-up");
  }

  companyHide() {
    (this.$refs.companyIcon as HTMLElement).classList.remove("rotate-up");
  }

  siteShow() {
    (this.$refs.siteIcon as HTMLElement).classList.add("rotate-up");
  }

  siteHide() {
    (this.$refs.siteIcon as HTMLElement).classList.remove("rotate-up");
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
.list-item-active
  color #fff
  background #1EA5FF
  
</style>
