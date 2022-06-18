const Joi = require('joi');
const bcrypt = require('bcryptjs');
const { getUser } = require('../../database/queries/user/userQuery');
const { createUserToken } = require('../../utils/helpers');

const loginController = (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: true } }),
    password: Joi.string().min(3),
  });
  const { email, password } = req.body;
  schema
    .validateAsync({ email, password })
    .then(() => getUser(email))
    .then((user) => {
      if (user.rows.length === 0) {
        throw new Error('User not found');
      } else {
        bcrypt.compare(password, user.rows[0].password, (err, match) => {
          if (match) {
            res
              .status(201)
              .cookie('token', createUserToken(user.rows[0]))
              .json({ msg: `Welcome back ${user.rows[0].name}` });
          }
        });
      }
    })
    .catch((err) => console.log(err));
};

module.exports = loginController;
