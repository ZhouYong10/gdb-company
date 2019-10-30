<template>
  <el-container class="global-container" direction="vertical">
    <nav-bar />
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

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NavBar from "./components/NavBar/index.vue";
import SideBar from "./components/SideBar/index.vue";

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
