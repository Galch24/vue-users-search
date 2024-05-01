import { createStore } from "vuex";
import { userModule } from "@/store/userModule";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user: userModule,
  },
});
