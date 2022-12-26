import Vue from "vue";
import { UTableColumn, UTable, UxGrid, UxTableColumn } from "umy-ui";

export function configUMYUi() {
  Vue.use(UTableColumn);
  Vue.use(UTable);
  Vue.use(UxGrid);
  Vue.use(UxTableColumn);
}
