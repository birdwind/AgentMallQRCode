import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "vuetify/dist/vuetify.min.css";
// import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

export const vuetify = new Vuetify({
  theme: {
    dark: false,
  },
  icons: {
    iconfont: "mdi",
  },
});
