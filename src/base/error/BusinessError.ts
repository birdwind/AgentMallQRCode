export class BusinessError extends Error {
  data: any;
  constructor(message: string, data?: any, stack?: any) {
    super(message);
    this.data = data;
    if (stack) {
      this.stack = stack;
    }
  }
}
