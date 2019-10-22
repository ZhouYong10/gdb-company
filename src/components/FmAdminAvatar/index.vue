<template>
    <div class="fm-admin-avatar">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <el-dropdown>
            <el-button type="primary">
                更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item>双皮奶</el-dropdown-item>
                <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from "vue-property-decorator";

    export default class FmAdminAvatar extends Vue {

    };
</script>

<style scoped lang="stylus">
.fm-admin-avatar
    display inline-block
</style>
