<template>
  <div class="wrapper">
    <Header />
    <div class="main-container">
      <sidebar />
      <main-content />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import MainContent from "@/components/MainContent.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MainContent,
    Sidebar,
    Header,
  },
  data() {
    return {
      search: "",
    };
  },
});
</script>
<style lang="scss" scoped>
.main-container {
  margin: 0 auto;
  display: flex;
  max-width: 1266px;
  justify-content: flex-start;
  border-radius: 10px;
  background-color: #fdfdfd;
  min-height: calc(100vh - 100px);
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
