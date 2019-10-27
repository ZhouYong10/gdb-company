<template>
  <el-row class="people-change-week">
    <el-col :span="24">
      <h1 class="title">{{ title }}</h1>
    </el-col>
    <el-col :span="24">
      <el-row type="flex" align="middle" justify="center">
        <el-col :span="12">
          <fm-people-brief-list-scroll
            :title-color="'#03A3FF'"
            :title="titleLeft"
            :peoples="datasLeft"
          />
        </el-col>
        <el-col :span="12">
          <fm-people-brief-list-scroll
            :title-color="'#F4B300'"
            :title="titleRight"
            :peoples="datasRight"
          />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import FmPeopleBriefListScroll from "@/components/FmPeopleBriefListScroll/index.vue";
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "FmPeopleChangeWeek",
  components: {
    FmPeopleBriefListScroll
  }
})
export default class FmPeopleChangeWeek extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: String, required: true }) readonly titleLeft!: string;
  @Prop({ type: Array, required: true }) readonly datasLeft!: Array<{
    avatarUrl: string;
    name: string;
    profession: string;
    site: string;
    dateTime: string;
  }>;
  @Prop({ type: String, required: true }) readonly titleRight!: string;
  @Prop({ type: Array, required: true }) readonly datasRight!: Array<{
    avatarUrl: string;
    name: string;
    profession: string;
    site: string;
    dateTime: string;
  }>;
}
</script>

<style scoped lang="stylus">
.people-change-week
    background #fff
    .title
        margin 4px 0 8px
        font-size:1em
</style>
