import HTTP_STATUS from 'http-status-codes';

export interface IErrorResponse {
  message: string
  status: number
  statusCode: string
  serializeErrors(): IError
}

export interface IError {
  message: string
  status: string
  statusCode: number
}

export abstract class CustomError extends Error {
  abstract statusCode: number
  abstract status: string

  constructor(message: string, statusCode: number) {
    super(message);
  }

  public serializeErrors(): IError {
    return {
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}

export class BadRequestError extends CustomError {
  statusCode = HTTP_STATUS.BAD_REQUEST;
  status = 'error';

  constructor(message: string) {
    super(message, HTTP_STATUS.BAD_REQUEST);
  }
}

export class NotFoundError extends CustomError {
  statusCode = HTTP_STATUS.NOT_FOUND;
  status = 'error';

  constructor(message: string) {
    super(message, HTTP_STATUS.NOT_FOUND);
  }
}

export class UnauthorizedError extends CustomError {
  statusCode = HTTP_STATUS.UNAUTHORIZED;
  status = 'error';

  constructor(message: string) {
    super(message, HTTP_STATUS.UNAUTHORIZED);
  }
}

export class FileTooLargeError extends CustomError {
  statusCode = HTTP_STATUS.REQUEST_TOO_LONG;
  status = 'error';

  constructor(message: string) {
    super(message, HTTP_STATUS.REQUEST_TOO_LONG);
  }
}

export class ServerError extends CustomError {
  statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR;
  status = 'error';

  constructor(message: string) {
    super(message, HTTP_STATUS.INTERNAL_SERVER_ERROR);
  }
}

export class JoiValidationError extends CustomError {
  statusCode = HTTP_STATUS.BAD_REQUEST;
  status = 'error';

  constructor(message: string) {
    super(message, HTTP_STATUS.BAD_REQUEST);
  }
}
