import axios from "axios";
import { getStringQueryParams } from "@/helpers";

export const userModule = {
  state: () => ({
    users: [],
    isUsersLoading: false,
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPages: 0,
    selectedUser: null,
  }),
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    clearUsers(state) {
      state.users = [];
    },
    setLoading(state, bool) {
      state.isUsersLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setSelectedUser(state, user) {
      state.selectedUser = user;
    },
  },
  actions: {
    async searchUsers({ state, commit }, search) {
      try {
        commit("setLoading", true);
        commit("setSearchQuery", search);
        const searchQuery = getStringQueryParams(search);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users?${searchQuery}`,
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit(
          "setTotalPages",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setUsers", response.data);
      } catch (e) {
        console.log(e);
        commit("clearUsers");
      } finally {
        commit("setLoading", false);
        commit("setSelectedUser", null);
      }
    },
    selectUser({ commit }, user) {
      if (user && user?.username) {
        commit("setSelectedUser", user);
      }
    },
  },
  namespaced: true,
};
