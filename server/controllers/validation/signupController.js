const Joi = require('joi');
const { findUser, registerUser } = require('../../database/queries/user/userQuery');
const CustomError = require('../../utils/customError');
const { hashPassword, createUserToken } = require('../../utils/helpers');
// const { signInSchema } = require('../../utils/signupSchema');

const signUpController = (req, res, next) => {
  const { name, email, password } = req.body;

  const signupSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: true } }).required(),
    password: Joi.string().min(3).required(),
  });
  signupSchema.validateAsync({ name, email, password })
    .then(() => findUser(email))
    .then((result) => {
      if (result.rows[0].exists === true) {
        throw new CustomError('User Already exists', 409);
      }
      hashPassword(password)
        .then((hashedPassword) => registerUser(name, email, hashedPassword))
        .then((user) => {
          res
            .status(201)
            .cookie('token', createUserToken(user.rows[0]))
            .json({
              msg: `Welcome ${user.name}`,
            });
        });
    })
    .catch((err) => next(err));
};

module.exports = signUpController;
