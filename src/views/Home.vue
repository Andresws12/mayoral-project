<template>
  <div class="home columns">
    <div class="column">
      {{ calendario }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import mainStore from "@/store/MainStore";

@Component({
  name: "Home",
})
export default class Home extends Vue {
  private mainStore = mainStore.context(this.$store);

  private get calendario(): any {
    return this.mainStore.state.calendario;
  }
}
</script>

<style lang="scss" scoped></style>
