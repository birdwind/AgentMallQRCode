import Vue from "vue";
import VueZxingScanner from "vue-zxing-scanner";

export function configBarCode() {
  Vue.use(VueZxingScanner);
}
