const bcrypt = require('bcryptjs');
const Joi = require('joi');

const { getUser } = require('../../database/queries/user/userQuery');
const { default: CustomError } = require('../../utils/customError');
const { createUserToken } = require('../../utils/helpers');

const loginController = (req, res, next) => {
  const { email, password } = req.body;
  const signinSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(3).required(),
  });

  signinSchema.validateAsync({ email, password })
    .then(() => getUser(email))
    .then((user) => {
      if (user.rows.length === 0) {
        throw new CustomError('User not found', 400);
      } else {
        bcrypt.compare(password, user.rows[0].password, (err, match) => {
          if (match) {
            res
              .status(201)
              .cookie('token', createUserToken(user.rows[0]))
              .json({ msg: `Welcome back ${user.rows[0].name}` });
          } else {
            throw new Error("Password doesn't match", 400);
          }
        });
      }
    })
    .catch((err) => next(err));
};

module.exports = loginController;
