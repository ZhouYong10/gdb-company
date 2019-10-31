<template>
  <div class="fm-radio-list">
    <h4 class="title">{{ title }}</h4>
    <div class="list">
      <div class="item" v-for="(item, index) in items" :key="index">
        <span :class="{label:true, 'fm-radio-active': item.id === value.id}" @click="change(item)">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Model } from "vue-property-decorator";
@Component({
  name: "FmRadioList"
})
export default class FmRadioList extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: Array, required: true }) readonly items!: Array<any>;
  @Model("change") value!: any;

  @Emit()
  change(item) {}
}
</script>

<style scoped lang="stylus">
.fm-radio-active
  color #ffffff
  background #1EA5FF
  cursor pointer
  border-radius 28px
.fm-radio-list
  display flex
  align-items flex-start
  margin-bottom 12px
  .title
    line-height 28px
    margin 0
    padding 0 29px 0 12px
    font-size 1em
    font-weight 400
    min-width 42px
  .list
    display flex
    justify-content flex-start
    flex-wrap wrap
    .item
      padding 0 18px
      .label
        padding 0 8px 2px
        line-height 28px
        &:hover
          color #ffffff
          background #1EA5FF
          cursor pointer
          border-radius 28px


</style>
