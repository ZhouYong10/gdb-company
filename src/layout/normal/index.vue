<template>
  <el-container class="global-container" direction="vertical">
    <nav-bar />
    <el-container class="main-container">
      <el-aside width="200px" class="scroll-bar">
        <side-bar />
      </el-aside>
      <el-main class="main-content">
        <fm-breadcrumb :items="items"/>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import NavBar from "./components/NavBar/index.vue";
import SideBar from "./components/SideBar/index.vue";
import FmBreadcrumb from "@/components/FmBreadcrumb/index.vue";
import { Route } from "vue-router";

@Component({
  name: "LayoutNormal",
  components: {
    NavBar,
    SideBar,
    FmBreadcrumb
  }
})
export default class LayoutNormal extends Vue {
  items: Array<{ name: string; path: string }> = [];

  created() {
    this.items = this.parseItems(this.$route);
  }

  @Watch("$route")
  routeChanged(to: Route) {
    this.items = this.parseItems(to);
  }

  private parseItems(to: Route) {
    let url = to.path;
    if (url.indexOf("webPage") !== -1) {
      return [];
    }
    let titles = to.meta.title.split("/");
    let items = titles.map((title: string, index: number) => {
      let parts = url.split("/");
      let aimParts = parts.slice(0, index + 2);
      if (index === 0 || index === titles.length - 1) {
        return {name: title, path: ""}
      }else{
        return {name: title, path: `${aimParts.join("/")}`}
      }
    });
    return items;
  }
}
</script>

<style scoped lang="stylus">
.global-container
  height 100%;
.main-container
  height 100%
.el-aside
  overflow-x hidden
  overflow-y auto
  border-right 1px solid #E6E6E6
  background #F2F2F2

.main-content
  background #F9F9F9
  height 100%
  overflow hidden
  padding 6px
  .content-page
    padding 0
    height 100%
    overflow hidden
</style>
