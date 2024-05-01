<template>
  <div class="sidebar">
    <h2>Поиск сотрудников</h2>
    <div class="form-control">
      <input type="text" v-model="search" :placeholder="placeholder" />
    </div>
    <div class="search-items">
      <h2>Результаты поиска</h2>
      <user-list />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserList from "@/components/User/UserList.vue";

export default defineComponent({
  name: "Sidebar",
  components: { UserList },
  data() {
    return {
      placeholder: "Введите Id или имя",
      search: "",
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
  width: 248px;
  padding: 31px 22px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
h2 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 22px;
}
.form-control {
  margin-bottom: 26px;

  input[type="text"] {
    border-radius: 8px;
    border: 1px solid #e9ecef;
    height: 46px;
    width: 100%;
    padding: 8px 10px;
    box-sizing: border-box;
    font-size: 14px;
  }
}
</style>
