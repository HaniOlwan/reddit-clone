const { findUser, registerUser } = require('../../database/queries/user/userQuery');
const { hashPassword, createUserToken } = require('../../utils/helpers');

const signupController = (req, res) => {
  const { email, username, password } = req.body;
  findUser(email)
    .catch('User already exists')
    .then(() =>
      hashPassword(password)
        .then((hashedPassword) => {
          registerUser(email, username, hashedPassword)
            .then((user) => {
              res.cookie('token', createUserToken(user.rows[0]));
              res.json({
                msg: `Welcome ${username}`,
                status: 200,
              });
            })
            .catch('User Already exists');
        })
        .catch('Password Couldnt be hashed')
    );
};

module.exports = signupController;
