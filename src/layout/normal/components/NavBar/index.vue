<template>
  <div class="nav-bar">
    <router-link to="/">
      <el-image :src="logo" fit="fill" />
    </router-link>
  </div>
</template>

<script>
import logo from "@/assets/images/gdb_web_logo.png";
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "NavBar"
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
  padding 16px 34px
</style>
