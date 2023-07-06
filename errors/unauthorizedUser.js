const { StatusCodes } = require("http-status-codes");
const CustomError = require("./customError");
class Unauthorized extends CustomError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = Unauthorized;
