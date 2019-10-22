<template>
  <el-container class="global-container">
    <el-header height="75px">
      <nav-bar />
    </el-header>
    <el-container class="main-container">
      <el-aside width="200px">
        <side-bar />
      </el-aside>
      <el-main class="main-content">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import NavBar from "@/layout/normal/components/NavBar/index";
import SideBar from "@/layout/normal/components/SideBar/index";

@Component({
  name: "LayoutNormal",
  components: {
    NavBar,
    SideBar
  }
})
export default class LayoutNormal extends Vue {}
</script>

<style scoped lang="stylus">
.global-container
  height 100%;

.el-header
  padding 0
.main-content
  overflow hidden
  padding 6px
</style>
