<template>
  <div class="fm-radio-list">
    <h4 class="title">{{ title }}</h4>
    <div class="list" @click.stop.prevent="select" ref="fmRadioList">
      <div class="item" v-for="(item, index) in items" :key="index">
        <span class="label" :data-itemid="item.id">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
@Component({
  name: "FmRadioList"
})
export default class FmRadioList extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: Array, required: true }) readonly items!: Array<any>;
  currentLabel = null;

  select(obj: any) {
    if (obj.target.tagName.toLowerCase() !== "span") {
      return;
    }
    if (this.currentLabel) {
      if (this.currentLabel.dataset.itemid === obj.target.dataset.itemid) {
        return;
      }
      this.currentLabel.classList.remove("fm-radio-active");
    }
    let $label = (this.currentLabel = obj.target);
    $label.classList.add("fm-radio-active");
    let aim = this.find($label.dataset.itemid);
    this.selected(aim)
  }

  @Emit()
  selected(item) {}

  private find(id: any) {
    return this.items.find(item => {
      return item.id === id;
    });
  }
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
  .title
    line-height 28px
    margin 0
    padding 0 32px 0 12px
    font-size 1em
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
