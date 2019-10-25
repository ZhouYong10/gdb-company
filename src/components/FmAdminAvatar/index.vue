<template>
  <div class="fm-admin-avatar">
    <el-avatar icon="el-icon-user-solid"></el-avatar>
    <el-dropdown class="bar-menu" trigger="hover">
      <span class="el-dropdown-link">
        {{username}}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "FmAdminAvatar"
})
export default class FmAdminAvatar extends Vue {
  username: string = "用户名";
}
</script>

<style scoped lang="stylus">
.fm-admin-avatar
  padding-right 20px
  .bar-menu
    padding-left 12px
    color white
    position relative
    top -15px
    cursor pointer
</style>
