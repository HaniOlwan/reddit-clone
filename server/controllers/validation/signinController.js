const Joi = require('joi');
const bcrypt = require('bcryptjs');
const { getUser } = require('../../database/queries/user/userQuery');
const { createUserToken, handleError } = require('../../utils/helpers');

const loginController = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: true } }),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });
  const { email, password } = req.body;
  schema
    .validateAsync({ email, password })
    .then(() =>
      getUser(email)
        .then((users) => users.rows)
        .then(
          (user) =>
            new Promise((resolve, reject) => {
              bcrypt.compare(password, user[0].password, (err, match) => {
                if (match) {
                  res
                    .status(201)
                    .cookie('token', createUserToken(user[0]))
                    .json({ msg: `Welcome back ${user[0].name}` });
                } else {
                  res.status(400).json({ msg: 'Email or password is incorrect' });
                  reject(err);
                }
              });
            })
        )
        .catch("Email isn't registered")
    )

    .catch('could not validate input');
};

module.exports = loginController;
