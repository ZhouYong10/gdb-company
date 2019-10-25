<template>
  <el-breadcrumb class="breadcrumb" separator-class="el-icon-arrow-right" v-if="items.length">
    <el-breadcrumb-item v-for="(item, index) in items" :to="item.path" :key="index">
      {{ item.name }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "FmBreadcrumb"
})
export default class FmBreadcrumb extends Vue {
  @Prop({ type: Array, required: true }) readonly items!: Array<{
    name: string;
    path: string;
  }>;
}
</script>

<style scoped lang="stylus">
.breadcrumb
    margin 6px
    padding 8px
    border-left 3px solid #1EA5FF
</style>
