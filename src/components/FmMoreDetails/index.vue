<template>
  <router-link class="more-details" :to="path">
    详情
    <i class="el-icon-d-arrow-right"></i>
  </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({
  name: "FmMoreDetails"
})
export default class FmMoreDetails extends Vue {
  @Prop({ type: String, required: true }) readonly path!: string;
}
</script>

<style scoped lang="stylus">
.more-details
    color #a0a5a5
    text-decoration: none
    font-size 15px
    &:hover
        color #1EA5FF
        cursor pointer
</style>
