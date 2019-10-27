<template>
  <el-header height="70px" class="nav-bar">
    <router-link to="/" class="gdb-logo">
      <el-image :src="logo" fit="fill" />
    </router-link>
    <fm-cascade-select class="company-site-select"/>
    <fm-admin-avatar />
  </el-header>
</template>

<script>
import logo from "./gdb_web_logo.png";
import { Vue, Component } from "vue-property-decorator";
import FmCascadeSelect from "@/components/FmCascadeSelector/index.vue";
import FmAdminAvatar from "@/components/FmAdminAvatar/index";

@Component({
  name: "NavBar",
  components: {
    FmCascadeSelect,
    FmAdminAvatar
  }
})
export default class NavBar extends Vue {
  logo = logo;
}
</script>

<style scoped lang="stylus">
.nav-bar
  padding 0
  height 100%
  background-color #1EA5FF
  display flex
  justify-content space-between
  align-items center
  .company-site-select
    flex-grow 2
.gdb-logo
  min-width 200px
  text-align center
</style>
