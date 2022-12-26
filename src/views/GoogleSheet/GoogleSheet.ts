import Component from "vue-class-component";
import { BaseVue } from "@/base/view/BaseVue";
import { GoogleSheetService } from "@/services/GoogleSheetService";
import StreamBarcodeReader from "vue-barcode-reader/src/components/StreamBarcodeReader.vue";
import { MyLogger } from "@/base/utils/MyLogger";
import { Watch } from "vue-property-decorator";
import logger from "loglevel";

@Component({ components: { StreamBarcodeReader } })
export default class GoogleSheet extends BaseVue {
  private isShowSheet = true;

  private sheetData: any[] = [];

  private sheetTitleData: any[] = [];

  private qrcodeResult: any = { error: "", data: "" };

  private timer: any;

  private barcode: any = "";
  private lastBarcode: string = "";

  private result: string = "";

  private resultList: { barcode: string; orderId: string }[] = Array();

  @Watch("barcode")
  watchBarCodeChanged(data: string) {
    if (data !== "") {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.searchFromGoogleSheet(data);
      }, 1000);
    }
  }

  // created(){
  //   document.onkeypress = (e) =>{
  //     this.barcode = e.which;
  //   };
  // }

  mounted() {
    GoogleSheetService.loadSheet("1K4BFsJQUcQSRWwL2YoaAtV3_fw-Vc8rJRaDA8SyTuAw", "277981836").then((data) => {
      MyLogger.log(data);
      this.sheetData = data;
      // for (const item in this.sheetData[0]) {
      //   if (item != "_sheet" && item != "_rowNumber" && item != "_rawData") {
      //     this.sheetTitleData.push(item);
      //   }
      // }
    });
  }

  private async onDecode(decodedString: string) {
    alert(decodedString);
    await this.searchFromGoogleSheet(decodedString);
    // for(this.sheetData)
  }

  private async searchFromGoogleSheet(decodedString: string) {
    let orderId = "";
    this.result = "搜尋中";
    for (const index in this.sheetData) {
      if (this.sheetData[index].單號 === decodedString) {
        const temp = this.sheetData[index];
        temp.到貨 = "true";
        await GoogleSheetService.updateCellByRows(
          "1K4BFsJQUcQSRWwL2YoaAtV3_fw-Vc8rJRaDA8SyTuAw",
          "277981836",
          temp
        ).then(() => {
          orderId = temp.編號;
        });
        break;
      }
    }

    if (orderId === "") {
      this.result = "查無單號";
    } else {
      this.result = orderId;
    }
    this.lastBarcode = decodedString;
    this.resultList.push({ barcode: decodedString, orderId: this.result });
    this.barcode = "";
  }

  private onLoaded(): void {
    MyLogger.log("Scanner", "loaded");
  }
}
