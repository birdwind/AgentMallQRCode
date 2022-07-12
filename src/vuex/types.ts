// auth模組
import { HistoryMessage } from "@/base/data/historyMessage";

export type Login = (data: { account: string; password: string }) => Promise<void>;

// ui模組
export type ShowLoading = (isShow: boolean) => void;
export type Reload = (isReload: boolean) => Promise<void>;
export type AddHistoryMessage = (message: HistoryMessage) => Promise<void>;
