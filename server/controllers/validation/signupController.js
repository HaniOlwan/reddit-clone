const { findUser, registerUser } = require('../../database/queries/user/userQuery');
const { hashPassword, createUserToken } = require('../../utils/helpers');

const signupController = (req, res) => {
  const { email, password } = req.body;
  findUser(email)
    .catch('User already exists')
    .then(() =>
      hashPassword(password)
        .then((hashedPassword) => {
          registerUser(email, hashedPassword)
            .then((user) => {
              res.cookie('token', createUserToken(user.rows[0]));
              res.json({
                msg: `Welcome ${email}`,
                status: 200,
              });
            })
            .catch('User Already exists');
        })
        .catch('Password Couldnt be hashed')
    );
};

module.exports = signupController;
