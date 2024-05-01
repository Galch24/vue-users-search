<template>
  <div class="main">
    <user-card />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserCard from "@/components/User/UserCard.vue";

export default defineComponent({
  name: "MainContent",
  components: { UserCard },
  data() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.main {
  position: relative;
  width: calc(100% - 292px);
  padding: 32px 20px;
  box-sizing: border-box;
}
</style>
