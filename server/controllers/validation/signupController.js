const { hashPassword, handleError } = require('../../utils/helpers');

const signupController = (req, res) => {
  const { email, username, password } = req.body;
  hashPassword('qwerty').then((hashedPassword) => {
    console.log(hashedPassword);
  }); //Hash password
};

module.exports = signupController;
