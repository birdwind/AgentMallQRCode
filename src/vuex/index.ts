import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Auth from "@/vuex/module/auth";
import ElementUI from "@/vuex/module/elementUI";

Vue.use(Vuex);

export default new Vuex.Store({
  // state, // 用來存放狀態值，可視為Vuex的data
  // mutations, // 更改state的都會放在這邊，類似methods的概念
  // actions, // 用來呼叫mutations的入口，與外部非同步的資料操作也在這裡完成
  // getters, // 由state衍生出來的狀態，可視為Vue的computed
  plugins: [
    createPersistedState({
      key: process.env.VUE_APP_AppName,
      storage: window.sessionStorage,
    }),
  ],
  modules: {
    Auth,
    ElementUI,
  },
});
