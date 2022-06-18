const { findUser, registerUser } = require('../../database/queries/user/userQuery');
const { hashPassword, createUserToken } = require('../../utils/helpers');
const { signInSchema } = require('../../utils/signinSchema');

const signUpController = (req, res) => {
  const { name, email, password } = req.body;
  signInSchema
    .validateAsync({ name, email, password })
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

module.exports = signUpController;
