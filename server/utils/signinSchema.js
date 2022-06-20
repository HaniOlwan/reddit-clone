const Joi = require('joi');

const signinSchema = Joi.object({
  email: Joi.string().required,
  password: Joi.string().min(3).required,
});

module.exports = signinSchema;
