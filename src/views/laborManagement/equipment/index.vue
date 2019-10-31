<template>
  <div class="page-container">
    <fm-breadcrumb :items="breadItems" />
    <el-main class="page-content">
      <fm-title-container title="人员活跃度统计">
        <template v-slot:header>
          <fm-more-details path="#" />
        </template>
        <template v-slot:content>
          <p>fjadlfldfalfads</p>
          <p>fjadlfldfalfads</p>
          <p>fjadlfldfalfads</p>
          <p>fjadlfldfalfads</p>
          <p>fjadlfldfalfads</p>
        </template>
      </fm-title-container>
    </el-main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FmBreadcrumb from "@/components/FmBreadcrumb/index.vue";
import FmTitleContainer from "@/components/FmTitleContainer/index.vue";
import FmMoreDetails from "@/components/FmMoreDetails/index.vue";

@Component({
  components: {FmMoreDetails, FmTitleContainer, FmBreadcrumb}
})
export default class extends Vue {
  breadItems = [{name: "劳务管理", path: ""}, {name: "设备管理", path: ""}];

}
</script>

<style scoped lang="stylus">

</style>
