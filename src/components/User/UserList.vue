<template>
  <div v-if="list.length > 0" class="users-list">
    <user-item
      v-for="item in list"
      :key="item.id"
      :user="item"
      class="item-list"
    />
  </div>
  <div v-else>
    <div class="muted">начните поиск</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserItem from "@/components/User/UserItem.vue";

export default defineComponent({
  name: "UserList",
  components: { UserItem },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
});
</script>

<style scoped lang="scss">
.item-list {
  margin-bottom: 15px;
}
</style>
