const ErrorService = require("../services/error.service");
const UserService = require("../services/user.service");
const { validateCreate } = require("../validations/user.validation");

const create = async (req, res, next) => {
  try {
    const { error } = validateCreate(req.body);

    if (error) {
      next(ErrorService.badRequest(error.details[0].message));
      return;
    }

    const isUserNameExist = await UserService.findByUsername(req.body.username);

    if (isUserNameExist) {
      next(ErrorService.conflict("Username already exist"));
      return;
    }

    const newUser = await UserService.create(req.body);

    res.status(200).send(newUser);
  } catch (err) {
    next(ErrorService.internal(err.message));
  }
};

const signIn = async (req, res, next) => {
  try {
    const { error } = validateCreate(req.body);

    if (error) {
      next(ErrorService.badRequest(error.details[0].message));
      return;
    }

    const user = await UserService.findByUsername(req.body.username);

    if (!user) {
      next(ErrorService.badRequest("Invalid username or password"));
      return;
    }

    const passCheck = UserService.comparePass(
      req.body.password,
      user.dataValues.password
    );

    if (!passCheck) {
      next(ErrorService.badRequest("Invalid username or password"));
      return;
    }

    const token = UserService.getToken({
      userId: user.dataValues.id,
      username: user.dataValues.username,
    });

    res.status(200).send({
      username: user.dataValues.username,
      token,
    });
  } catch (err) {
    next(ErrorService.internal(err.message));
  }
};

module.exports = { create, signIn };
