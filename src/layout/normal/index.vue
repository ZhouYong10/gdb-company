<template>
  <el-container class="global-container">
    <el-header height="70px">
      <nav-bar />
    </el-header>
    <el-container class="main-container">
      <el-aside width="200px" class="scroll-bar">
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
.main-container
  height 100%
.el-aside
  overflow-x hidden
  overflow-y auto
  border-right 1px solid #E6E6E6
  background #F2F2F2
.el-header
  padding 0
.main-content
  height 100%
  overflow hidden
  padding 6px
</style>
