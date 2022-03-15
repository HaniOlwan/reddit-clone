const bcrypt = require('bcryptjs');
const { getUser } = require('../../database/queries/user/userQuery');
// const { hashPassword, createUserToken } = require('../../utils/helpers');

const signinController = (req, res) => {
  const { email, password } = req.body;

  getUser(email)
    .then((users) => users.rows)
    .then((user) =>
    //   bcrypt.compare(
    //     password,
    //     user.password,
    //     (err, result) =>
    //       new Promise((resolve, reject) => {
    //         if (err) return reject(err);

    //         console.log(result);
    //         resolve(result);
    //       })
    //   )
    );
};

module.exports = signinController;
