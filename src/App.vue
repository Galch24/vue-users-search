<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Header },
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
