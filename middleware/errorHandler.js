const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  const errorObj = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "there was some kind of error",
  };

  res.status(errorObj.statusCode).send(errorObj);
};
module.exports = errorHandler;
