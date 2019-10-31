<template>
  <fm-title-container :title="title">
    <template v-slot:content>
      <el-row type="flex" align="middle" justify="center">
        <el-col :span="12">
          <fm-people-brief-list-scroll
            :title-color="titleLeftColor"
            :title="titleLeft"
            :peoples="datasLeft"
          />
        </el-col>
        <el-col :span="12">
          <fm-people-brief-list-scroll
            :title-color="titleRightColor"
            :title="titleRight"
            :peoples="datasRight"
          />
        </el-col>
      </el-row>
    </template>
  </fm-title-container>
</template>

<script lang="ts">
import FmPeopleBriefListScroll from "@/components/FmPeopleBriefListScroll/index.vue";
import { Vue, Component, Prop } from "vue-property-decorator";
import FmTitleContainer from "@/components/FmTitleContainer/index.vue";
@Component({
  name: "FmPeopleChangeWeek",
  components: {
    FmTitleContainer,
    FmPeopleBriefListScroll
  }
})
export default class FmPeopleChangeWeek extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: String, required: true }) readonly titleLeft!: string;
  @Prop({ type: String, default: "#03A3FF" }) readonly titleLeftColor?: string;
  @Prop({ type: Array, required: true }) readonly datasLeft!: Array<{
    avatarUrl: string;
    name: string;
    profession: string;
    site: string;
    dateTime: string;
  }>;
  @Prop({ type: String, required: true }) readonly titleRight!: string;
  @Prop({ type: String, default: "#F4B300" }) readonly titleRightColor?: string;
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
</style>
