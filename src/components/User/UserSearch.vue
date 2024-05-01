<template>
  <div>
    <h2>Поиск сотрудников</h2>
    <div class="form-control">
      <input
        type="text"
        name="searchUser"
        v-model="search"
        :placeholder="placeholder"
        @input="handleSearch"
      />
    </div>
    <div class="search-items">
      <h2>Результаты</h2>
      <loader v-if="isUsersLoading" />
      <user-list v-else :list="users" @select-item="handleSelectUser" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserList from "@/components/User/UserList.vue";
import { mapActions, mapState } from "vuex";
import { UserInterface } from "@/types/storeTypes";
import Loader from "@/components/Loader.vue";

// TODO скорректировать тип
type TMapState = Partial<{
  users: (state: any) => any;
  selectedUser: (state: any) => UserInterface | null;
  isUsersLoading: (state: any) => boolean;
}>;

export default defineComponent({
  name: "UserSearch",
  components: { Loader, UserList },
  data() {
    return {
      placeholder: "Введите Id или имя",
      search: "",
    };
  },
  computed: {
    ...mapState<any, TMapState>({
      users: (state) => state.user.users,
      selectedUser: (state) => state.user.selectedUser,
      isUsersLoading: (state) => state.user.isUsersLoading,
    }),
  },
  methods: {
    ...mapActions({
      searchUsers: "user/searchUsers",
      selectUser: "user/selectUser",
    }),
    handleSearch() {
      this.searchUsers(this.search);
    },
    handleSelectUser(user) {
      this.selectUser(user);
    },
  },
});
</script>

<style scoped lang="scss">
h2 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 17px;
}
.form-control {
  margin-bottom: 33px;

  input[type="text"] {
    border-radius: 8px;
    border: 1px solid #e9ecef;
    height: 48px;
    width: 100%;
    padding: 8px 18px;
    box-sizing: border-box;
    font-size: 14px;
  }
}
.search-items {
  position: relative;
  overflow-y: auto;
  max-height: 500px;
  margin-left: -10px;
  margin-right: -10px;
  padding: 0 10px;
}
</style>
