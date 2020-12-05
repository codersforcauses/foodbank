export enum HttpStatusCode {
  OK = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_SERVER = 500
}

class AppError extends Error {
  public readonly name: string
  public readonly httpCode: HttpStatusCode
  public readonly isOperational: boolean

  constructor(
    name: string,
    httpCode: HttpStatusCode,
    message: string,
    isOperational: boolean
  ) {
    super(message)
    Object.setPrototypeOf(this, new.target.prototype)

    this.name = name
    this.httpCode = httpCode
    this.isOperational = isOperational

    Error.captureStackTrace(this)
  }
}
