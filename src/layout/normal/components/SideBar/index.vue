<template>
  <el-menu default-active="2" class="side-bar-menu" unique-opened>
    <el-submenu v-for="(menu, index) in menus" :index="index + ''" :key="index">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ menu.name }}</span>
      </template>
      <el-menu-item
        v-for="(subMenu, subIndex) in menu.items"
        :index="index + '-' + subIndex"
        :key="index + '-' + subIndex"
      >
        <router-link :to="subMenu.url">{{ subMenu.name }}</router-link>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {}
})
export default class SideBar extends Vue {
  get menus() {
    return this.$store.state.menus;
  }
}
</script>

<style scoped lang="stylus">
.side-bar-menu
  height 100%
</style>
