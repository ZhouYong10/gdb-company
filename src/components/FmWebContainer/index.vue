<template>
  <iframe
    :src="src"
    :style="{ width: width, height: height, border: 'none' }"
  ></iframe>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class FmWebContainer extends Vue {
  @Prop({ type: String, required: true }) readonly src!: String;
  @Prop({ type: String, default: "100%" }) readonly width!: String;
  @Prop({ type: String, default: "100%" }) readonly height!: String;
}
</script>
