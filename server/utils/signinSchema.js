const Joi = require('joi');

const signInSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email({ tlds: { allow: true } }),
  password: Joi.string().min(3),
});

module.exports = { signInSchema };
