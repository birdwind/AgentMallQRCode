import { MyLogger } from "@/base/utils/MyLogger";
import stores from "@/store";
import store from "@/store";
import { UI_HISTORY_MESSAGE, UI_LOADING, UI_RELOAD } from "@/store/mutationConstant";

export default {
  showLoading(context: any, data: any) {
    context.commit(UI_LOADING, data);
  },
  async reload(context: any, data: any): Promise<void> {
    await context.commit(UI_RELOAD, data);
  },
  async addHistoryMessage(context: any, data: any): Promise<void> {
    await context.commit(UI_HISTORY_MESSAGE, data);
  },
};
