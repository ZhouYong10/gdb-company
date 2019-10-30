<template>
  <el-row class="people-brief-list">
    <el-col>
      <h3 class="title" :style="{ borderBottom: `2px solid ${titleColor}` }">
        <span :style="{ background: titleColor }">{{ title }}</span>
      </h3>
    </el-col>
    <el-col>
      <seamless-scroll class="scroll-list" :data="peoples">
        <fm-people-brief-info
          v-for="(people, index) in peoples"
          :key="index"
          :people="people"
        />
      </seamless-scroll>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import SeamlessScroll from "vue-seamless-scroll";
import FmPeopleBriefInfo from "@/components/FmPeopleBriefInfo/index.vue";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  name: "FmPeopleBriefListScroll",
  components: {
    FmPeopleBriefInfo,
    SeamlessScroll
  }
})
export default class FmPeopleBriefListScroll extends Vue {
  @Prop({ type: String, required: true }) readonly titleColor!: string;
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: Array, required: true }) readonly peoples!: Array<{
    avatarUrl: string;
    name: string;
    profession: string;
    site: string;
    dateTime: string;
  }>;
}
</script>

<style scoped lang="stylus">
.people-brief-list
    padding 4px
    padding-right 12px
    .title
        margin 0
        font-size 0.9em
        position relative
        span
            display inline-block
            height 26px
            line-height: 26px
            padding-left 4px
            color #ffffff
            padding-right 18px
            border-top-right-radius 26px
    .scroll-list
      height 218px
      margin-top 8px
      overflow hidden
</style>
