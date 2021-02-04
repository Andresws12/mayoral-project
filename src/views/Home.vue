<template>
  <div class="home columns">
    <div class="column">hola</div>
    <div class="column">
      {{ testData }}
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

  private get testData(): boolean {
    return this.mainStore.state.testData;
  }
}
</script>

<style lang="scss" scoped></style>
