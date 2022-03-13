const bcrypt = require('bcryptjs');

const hashPassword = (password) =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        reject(err);
      } else {
        resolve({
          password: hashedPassword,
        });
      }
    });
  });

const handleError = (data) => {
  const { msg, status } = data;
  const error = new Error(msg);
  error.code = status;
  throw error;
};

module.exports = { handleError, hashPassword };
