class ErrorService {
  constructor(code, message) {
    this.code = code;
    this.message = message;
  }

  static badRequest(msg) {
    return new ErrorService(400, msg);
  }

  static conflict(msg) {
    return new ErrorService(409, msg);
  }

  static internal(msg) {
    return new ErrorService(500, msg);
  }

  static unauthorized(msg) {
    return new ErrorService(401, msg);
  }

  static notFound(msg) {
    return new ErrorService(404, msg);
  }
}

module.exports = ErrorService;
