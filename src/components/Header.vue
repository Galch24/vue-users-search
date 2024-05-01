<template>
  <div class="header">
    <nav class="container nav">
      <div class="logo">
        <router-link to="/">
          <img src="/images/logo.svg" alt="Жилфонд" />
        </router-link>
      </div>
      <div class="header-menu">
        <div v-for="item in menu" :key="item.id" class="menu-item">
          {{ item.label }}
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data() {
    return {
      menu: [{ label: "Пользователь", id: 1 }],
    };
  },
});
</script>

<style scoped lang="scss">
.header {
  min-height: 100px;
}
.nav {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.logo {
  padding-top: 37px;
}
.header-menu {
  padding-top: 32px;
}
</style>
