<template>
  <div class="nav-bar">
    <router-link to="/">
      <el-image :src="logo" fit="fill" />
    </router-link>
    <fm-cascade-select/>
<!--    <fm-admin-avatar/>-->
  </div>
</template>

<script>
import logo from "@/assets/images/gdb_web_logo.png";
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
  height 100%
  background-color #1EA5FF

  .el-image
    position relative
    top 18px
    padding-left 32px
    padding-right 32px



</style>
