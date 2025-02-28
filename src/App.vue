<template>
  <div>
    <router-view />
    <GithubButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GithubButton from "@/components/GithubButton.vue";
@Component({
  name: "App",
  components: {
    GithubButton,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped></style>
