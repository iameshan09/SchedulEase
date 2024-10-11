const Joi = require("joi");

const validateCreate = (data) => {
  const schema = Joi.object().keys({
    username: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
  });

  return schema.validate(data);
};

module.exports = { validateCreate };
