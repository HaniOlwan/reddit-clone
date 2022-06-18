const bcrypt = require('bcryptjs');
const { getUser } = require('../../database/queries/user/userQuery');
const { createUserToken } = require('../../utils/helpers');
const signinSchema = require('../../utils/signinSchema');

const loginController = (req, res, next) => {
  const { email, password } = req.body;
  signinSchema
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
          } else {
            throw new Error("Password doesn't match");
          }
        });
      }
    })
    .catch((err) => next(err));
};

module.exports = loginController;
