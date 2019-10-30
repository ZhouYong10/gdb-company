<template>
  <el-menu
    :default-active="activeId"
    class="side-bar-menu"
    background-color="#F2F2F2"
    unique-opened
    active-text-color="#fff"
  >
    <el-submenu
      v-for="menuGroup in menuGroups"
      :index="menuGroup.id + ''"
      :key="menuGroup.id"
    >
      <template slot="title">
        <i :class="menuGroup.icon"></i>
        <span>{{ menuGroup.name }}</span>
      </template>
      <el-menu-item
        v-for="menu in menuGroup.menus"
        :index="menu.id"
        :key="menu.id"
      >
        <router-link class="navigate" :to="`/${menu.path}`">
          <i :class="menu.icon"></i>
          {{ menu.name }}
        </router-link>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import {menuGroups} from "@/store";
@Component({
  components: {}
})
export default class SideBar extends Vue {
  get menuGroups() {
    return menuGroups;
  }

  get activeId() {
    let path = this.$route.path;
    let activeId;
    this.menuGroups.forEach(menuGroup => {
      menuGroup.menus.forEach(menu => {
        if (path.indexOf(menu.path) !== -1) {
          activeId = menu.id;
        }
      });
    });
    return activeId;
  }
}
</script>

<style scoped lang="stylus">
.side-bar-menu
  border none
  li
    padding 0!important
  .is-active .router-link-active
    color #1EA5FF
    background white
  .navigate
    display inline-block
    width 100%
    height 100%
    padding 0 45px 0 40px
    text-decoration none
    color black
    &:hover
      color #1EA5FF
</style>
