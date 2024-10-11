const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class UserService {
  static async create(body) {
    const passHash = bcrypt.hashSync(body.password, 10);
    const result = await User.create({
      ...body,
      password: passHash,
    });
    return result;
  }

  static async findByUsername(username) {
    return await User.findOne({
      where: { username },
    });
  }

  static comparePass(firstPass, secondPass) {
    return bcrypt.compareSync(firstPass, secondPass);
  }

  static getToken(payload) {
    return jwt.sign(payload, process.env.TOKEN_SECRECT, {
      expiresIn: "1d",
    });
  }
}

module.exports = UserService;
