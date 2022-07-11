import Component from "vue-class-component";
import { BaseVue } from "@/base/view/BaseVue";

@Component({
  components: {},
})
export default class Index extends BaseVue {
  copyRight = process.env.VUE_APP_CopyRight;
  workId = "";

  mounted() {
    this.workId = this.$route.params.workId;
  }
}
