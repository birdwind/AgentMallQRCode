import { HistoryMessage } from "@/base/data/historyMessage";

export interface ElementUIVuex {
  isLoading: boolean;
  isReload: boolean;
  message: HistoryMessage[];
}

export const state: ElementUIVuex = {
  isLoading: false,
  isReload: false,
  message: [],
};
