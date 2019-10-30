<template>
  <div class="people-brief-info">
    <el-image
      class="avatar"
      :src="people.avatarUrl"
      fit="fill"
      alt="人员头像"
    />
    <div class="info">
      <div class="name-profession">
        <strong class="name">{{ people.name }}</strong>
        <span class="profession">{{ people.profession }}</span>
      </div>
      <div class="site">
        <span>{{ people.site }}</span>
      </div>
      <div class="date-time">
        <span>{{ people.dateTime }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "FmPeopleBriefInfo"
})
export default class FmPeopleBriefInfo extends Vue {
  @Prop({ type: Object, required: true }) readonly people!: {
    avatarUrl: string;
    name: string;
    profession: string;
    site: string;
    dateTime: string;
  };
}
</script>

<style scoped lang="stylus">
.people-brief-info
    display flex
    align-items center
    margin-top 8px
    .avatar
        border 1px solid #d2d9d9
        width 60px
        height 60px
        margin-right 18px
    .info
        height 100%
        font-size 13px
        color #949495
        .name-profession, .site
            margin-bottom 6px
        .name
            font-size 16px
            color #000
            padding-right 6px
</style>
