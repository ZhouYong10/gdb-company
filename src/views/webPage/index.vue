<template>
  <fm-web-container :src="src" />
  <!--  <h1>{{ src }}</h1>-->
</template>

<script lang="ts">
import FmWebContainer from "@/components/FmWebContainer/index.vue";
import { Vue, Component, Prop } from "vue-property-decorator";
import { Route } from "vue-router";
@Component({
  components: {
    FmWebContainer
  }
})
export default class FmWebContent extends Vue {
  private src: String = "";

  private parseUrl(to: Route) {
    let url = to.params.url;
    let prop = "domain";
    if (to.query.hasOwnProperty(prop)) {
      return (this.src = `http://${to.query[prop]}/${url || ""}`);
    }
    this.src = url;
  }

  beforeRouteEnter(to: Route, from: Route, next: Function) {
    next((mv: FmWebContent) => mv.parseUrl(to));
  }

  beforeRouteUpdate(to: Route, from: Route, next: Function) {
    this.parseUrl(to);
    next();
  }
}
</script>

<style scoped></style>
