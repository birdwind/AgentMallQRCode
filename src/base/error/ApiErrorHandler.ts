export class ApiBadRequestError extends Error {
  public code: string;

  public data: any;

  constructor(code: string, message: string, data?: any) {
    super(message);
    this.code = code;
    this.data = data;
  }
}

export class ApiUnauthorizedError extends Error {
  public code: string;

  public data: any;

  constructor(code: string, message: string, data?: any) {
    super(message);
    this.code = code;
    this.data = data;
  }
}

export class ApiError extends Error {
  public code: string;

  public data: any;

  constructor(code: string, message: string, data?: any) {
    super(message);
    this.code = code;
    this.data = data;
  }
}
