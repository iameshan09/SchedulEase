const ErrorService = require("../services/error.service");

function apiErrorHandler(err, req, res, next) {
  if (err instanceof ErrorService) {
    res.status(err.code).json({ message: err.message });
    return;
  }

  res.status(500).json(err);
}

module.exports = apiErrorHandler;
