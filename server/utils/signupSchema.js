const Joi = require('joi');

const signupSchema = Joi.object({
  name: Joi.string().required,
  email: Joi.string().email({ tlds: { allow: true } }).required,
  password: Joi.string().min(3).required,
});

module.exports = signupSchema;
