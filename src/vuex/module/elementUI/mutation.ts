import { UI_HISTORY_MESSAGE, UI_LOADING, UI_RELOAD } from "@/vuex/mutationConstant";
import { ElementUIVuex } from "@/vuex/module/elementUI/state";
import { HistoryMessage } from "@/base/data/historyMessage";

export default {
  [UI_LOADING](state: ElementUIVuex, isLoading: boolean): void {
    state.isLoading = isLoading;
  },
  [UI_RELOAD](state: ElementUIVuex, isReload: boolean): void {
    state.isReload = isReload;
  },
  [UI_HISTORY_MESSAGE](state: ElementUIVuex, message: HistoryMessage): void {
    state.message.unshift(message);

    const maxCount = 50;
    if (state.message.length > maxCount) {
      state.message.pop();
    }
  },
};
