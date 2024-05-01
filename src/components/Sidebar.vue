<template>
  <div class="sidebar">
    <user-search />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserSearch from "@/components/User/UserSearch.vue";

export default defineComponent({
  name: "Sidebar",
  components: { UserSearch },
});
</script>

<style scoped lang="scss">
.sidebar {
  width: 292px;
  padding: 31px 30px 31px 22px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
</style>
