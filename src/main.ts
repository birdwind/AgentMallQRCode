import Vue from "vue";
import {
  configElementUi,
  configErrorHandler,
  configRightMouseMenu,
  configUMYUi,
  vuetify,
  configBarCode,
} from "@/base/config";
import App from "./App.vue";
import router from "./router";
import store from "./vuex";

Vue.config.productionTip = false;

configErrorHandler();
configElementUi();
configRightMouseMenu();
configUMYUi();
configBarCode();

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
