<template>
  <div class="fm-title-container">
    <div class="header">
      <h1 class="title">{{ title }}</h1>
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "FmTitleContainer"
})
export default class FmTitleContainer extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
}
</script>

<style scoped lang="stylus">
.fm-title-container
  border 1px solid #d2d9d9
  background #ffffff
  box-shadow 2px 2px 3px #B9B7B7
  padding 8px
  border-radius 6px
  .header
    display flex
    justify-content space-between
    margin-bottom 6px
    .title
      margin 0
      font-size 1.1em
</style>
