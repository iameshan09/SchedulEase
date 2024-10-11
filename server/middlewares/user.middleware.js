const jwt = require("jsonwebtoken");

const ErrorService = require("../services/error.service");
const { ERR_TOKEN_EXPIRED, INVALID_TOKEN } = require("../constants/errors");

async function authUser(req, res, next) {
  try {
    const token = req.header("auth_token");

    if (!token) {
      next(ErrorService.unauthorized("Unauthorized Access"));
      return;
    }

    const payload = jwt.verify(token, process.env.TOKEN_SECRECT);

    req.auth = payload;

    next();
  } catch (err) {
    if (err.name === ERR_TOKEN_EXPIRED) {
      next(ErrorService.unauthorized("Token expired"));
    } else if (err.name === INVALID_TOKEN) {
      next(ErrorService.unauthorized("Invalid token"));
    } else {
      next(ErrorService.internal(err.message));
    }
  }
}

module.exports = {
  authUser,
};
