const Joi = require("joi");

const newUser = (data) => {
const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });
  return schema.validate(data);
  };

  const loginCheck = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
      });
      return schema.validate(data);
      };

module.exports.newUser = newUser;
module.exports.loginCheck = loginCheck;