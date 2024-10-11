const Joi = require("joi");
const {
  PRIORITY_LOW,
  PRIORITY_MEDIUM,
  PRIORITY_HIGH,
} = require("../constants/priorities");

const validateCreate = (data) => {
  const schema = Joi.object().keys({
    title: Joi.string().trim().required(),
    description: Joi.string().optional(),
    priority: Joi.string()
      .valid(PRIORITY_LOW, PRIORITY_MEDIUM, PRIORITY_HIGH)
      .required(),
    due_date: Joi.date().required().iso().min("now"),
  });

  return schema.validate(data);
};

const validateUpdate = (data) => {
  const schema = Joi.object().keys({
    title: Joi.string().optional(),
    description: Joi.string().optional(),
    priority: Joi.string()
      .valid(PRIORITY_LOW, PRIORITY_MEDIUM, PRIORITY_HIGH)
      .optional(),
    due_date: Joi.date().iso().min("now").optional(),
  });

  return schema.validate(data);
};

module.exports = { validateCreate, validateUpdate };
