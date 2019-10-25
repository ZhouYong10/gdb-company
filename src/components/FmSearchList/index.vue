<template>
  <div class="search-list" @click.capture="choose">
    <el-input clearable="" placeholder="请输入搜索内容" v-model="search">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <transition-group
      class="list-container scroll-bar"
      name="staggered-fade"
      tag="ul"
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <li class="list-item" v-for="(item, index) in computedDatas" :key="index">
        <slot :item="item"></slot>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from "vue-property-decorator";
import { Velocity } from "@/plugins/element";

@Component({
  name: "FmSearchList"
})
export default class extends Vue {
  @Prop({ required: true }) readonly datas!: Array<any>;
  @Prop({ required: true }) readonly filteringPolicy!: (
    item: any,
    search: string
  ) => boolean;
  @Prop({ required: true }) readonly chooseItem!: (el: HTMLElement) => any;
  search: string = "";

  get computedDatas() {
    return this.datas.filter(item => {
      return this.filteringPolicy(item, this.search);
    });
  }

  choose(e: Event) {
    let el: any = e.target;
    if (el && el.tagName.toLowerCase() === "li") {
      this.selected(this.chooseItem(el));
      this.search = "";
    }
  }

  @Emit()
  selected(val: string) {}

  beforeEnter(el: HTMLElement) {
    el.style.opacity = "0";
    el.style.height = "0";
  }

  enter(el: HTMLElement, done: Function) {
    let delay = (el.dataset.index as any) * 150;
    setTimeout(() => {
      Velocity(el, { opacity: 1, height: "2em" }, { complete: done });
    }, delay);
  }

  leave(el: HTMLElement, done: Function) {
    let delay = (el.dataset.index as any) * 150;
    setTimeout(() => {
      Velocity(el, { opacity: 0, height: 0 }, { complete: done });
    }, delay);
  }
}
</script>

<style scoped lang="stylus">
.list-container
  max-height 360px
  min-height 120px
  overflow auto
  list-style none
  margin-bottom 0
  padding-left 0
  .list-item
    line-height 2em
    padding-left 8px
    cursor pointer
    &:hover
      background: #EAEAEA
      color #1EA5FF
</style>
