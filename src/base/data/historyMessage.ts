export interface HistoryMessage {
  id: number;
  code?: string;
  message: string;
  occurAt: Date;
  stacktrace?: string;
}
