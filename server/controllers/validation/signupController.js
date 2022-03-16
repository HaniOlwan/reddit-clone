const Joi = require('joi');
const { findUser, registerUser } = require('../../database/queries/user/userQuery');
const { hashPassword, createUserToken } = require('../../utils/helpers');

const signupController = (req, res) => {
  const schema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email({ tlds: { allow: true } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });
  const { name, email, password } = req.body;
  schema
    .validateAsync({ email, password })
    .then(() => findUser(email))
    .then((result) => {
      if (result.rows[0].exists === true) {
        throw new Error('User exists');
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
    .catch((err) => console.log(err));
};

module.exports = signupController;
