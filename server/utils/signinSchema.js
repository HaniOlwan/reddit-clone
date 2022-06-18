const Joi = require('joi');

const signinSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: true } }).required,
  password: Joi.string().min(3).required,
});

module.exports = signinSchema;
