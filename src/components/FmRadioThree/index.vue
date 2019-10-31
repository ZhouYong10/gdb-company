<template>
  <div class="fm-radio-three">
    <h5 class="title">{{title}}</h5>
    <div>
      <template v-for="(item, index) in items">
        <span :class="{label:true, 'fm-radio-active': item.id === value.id}" @click="change(item)" v-if="index === 0" :key="index">{{item.name}}</span>
        <el-radio :label="item.id" name="selector" :value="value.id" @change="change(item)" v-else :key="index">{{item.name}}</el-radio>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Model, Emit} from "vue-property-decorator";
@Component({
  name: "FmRadioThree"
})
export default class FmRadioThree extends Vue {
  @Prop({type: String, required: true}) readonly title!: string;
  @Prop({type:Array, required:true})readonly items!:Array<{name:string, id:string, value: any}>;
  @Prop({type: Object, required: true}) value!: { name: string, id: string, value: any; };

  @Emit()
  change(val) {}
}
</script>

<style scoped lang="stylus">
.fm-radio-active
  color #ffffff
  background #1EA5FF
  cursor pointer
  border-radius 28px
.fm-radio-three
  display flex
  align-items center
  min-width 250px
  .title
    margin 0
    font-weight 500
    margin-right 40px
    font-size 14px
  .label
    padding 0 8px 2px
    margin-right 26px
    line-height 28px
    &:hover
      color #ffffff
      background #1EA5FF
      cursor pointer
      border-radius 28px
</style>
