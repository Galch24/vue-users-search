<template>
  <div class="main">
    <div class="empty-message">
      Выберите сотрудника, чтобы посмотреть его профиль
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainContent",
  data() {
    return {};
  },
});
</script>

<style scoped lang="scss">
.main {
  position: relative;
  width: calc(100% - 300px);
}
.empty-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
