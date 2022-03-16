const bcrypt = require('bcryptjs');
const { getUser } = require('../../database/queries/user/userQuery');
const { createUserToken } = require('../../utils/helpers');

const loginController = (req, res) => {
  const { email, password } = req.body;

  getUser(email)
    .then((users) => users.rows)
    .then(
      (user) =>
        new Promise((resolve, reject) => {
          bcrypt.compare(password, user[0].password, (err, match) => {
            if (match) {
              res
                .status(200)
                .cookie('token', createUserToken(user[0]))
                .json({ msg: `Welcome back ${user[0].name}` });
            } else {
              res.status(400).json({ msg: 'Email or password is incorrect' });
              reject(err);
            }
          });
        })
    )
    .catch('User doesnt exist');
};

module.exports = loginController;
