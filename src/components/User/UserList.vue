<template>
  <div v-if="list.length > 0" class="users-list">
    <user-item
      v-for="item in list"
      :key="item.id"
      :user="item"
      class="list-item"
      :class="{ 'selected-item': selectedUser && selectedUser.id === item.id }"
      @click="selectUser(item)"
    />
  </div>
  <div v-else>
    <div class="muted">начните поиск</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserItem from "@/components/User/UserItem.vue";
import { mapState } from "vuex";
import { UserInterface } from "@/types/storeTypes";

// TODO скорректировать тип
type TMapState = Partial<{
  selectedUser: (state: any) => UserInterface | null;
}>;

export default defineComponent({
  name: "UserList",
  components: { UserItem },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapState<any, TMapState>({
      selectedUser: (state) => state.user.selectedUser,
    }),
  },
  methods: {
    selectUser(user) {
      this.$emit("select-item", user);
    },
  },
});
</script>

<style scoped lang="scss">
.list-item {
  margin-bottom: 19px;
  cursor: pointer;
  &.selected-item {
    background-color: #e0e0e0;
  }
}
</style>
