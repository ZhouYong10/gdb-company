<template>
  <div class="radio-list">
    <h5 class="title">{{ title }}</h5>
    <div class="list">
      <label
        class="fm-radio"
        v-for="(item, index) in items"
        :key="index"
        @click.stop.prevent="select(item, $event)"
      >
        <input
          class="fm-radio-input"
          type="radio"
          name="same_name"
          :value="item.id"
        />
        <span class="fm-radio-label">{{ item.name }}</span>
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Model } from "vue-property-decorator";
@Component({
  name: "FmRadioList"
})
export default class FmRadioList extends Vue {
  @Prop({ type: String, required: true }) readonly title!: string;
  @Prop({ type: Array, required: true }) readonly items!: Array<any>;

  select(obj: any, e: Event) {
    FmRadioList.clear();
    let $span = e.target;
    ($span as HTMLElement).classList.add("is-active");
  }

  private static clear() {
    let $labes = document.querySelectorAll(".fm-radio-label");
    $labes.forEach($label => {
      $label.classList.remove("is-active");
    });
  }
}
</script>

<style scoped lang="stylus">
.is-active
    color #1EA5FF
.fm-radio
    padding 4px
    .fm-radio-input
        display none
    .fm-radio-label
        cursor pointer
</style>
