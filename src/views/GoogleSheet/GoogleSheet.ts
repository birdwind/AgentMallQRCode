import Component from "vue-class-component";
import { BaseVue } from "@/base/view/BaseVue";
import { GoogleSheetService } from "@/services/GoogleSheetService";

@Component({})
export default class GoogleSheet extends BaseVue {
  private isShowSheet = true;

  mounted() {
    // GoogleSheetService.loadSheet("1K4BFsJQUcQSRWwL2YoaAtV3_fw-Vc8rJRaDA8SyTuAw", "1660285155");
    GoogleSheetService.updateCell("1K4BFsJQUcQSRWwL2YoaAtV3_fw-Vc8rJRaDA8SyTuAw", "1660285155", "Z2", "test888");
    this.isShowSheet = false;
    this.isShowSheet = true;
  }
}
