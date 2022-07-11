import Vue from "vue";
import { configElementUi, configErrorHandler, configRightMouseMenu, vuetify } from "@/base/config";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

configErrorHandler();
configElementUi();
configRightMouseMenu();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
