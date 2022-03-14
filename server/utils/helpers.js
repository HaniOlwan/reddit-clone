const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { ACCESS_TOKEN_KEY } = require('./../../config');

const hashPassword = (password) =>
  new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        reject(err);
      } else {
        resolve(hashedPassword);
      }
    });
  });

const createUserToken = (payload) => {
  const token = jwt.sign(payload, process.env.ACCESS_TOKEN_KEY);
  return token;
};

const handleError = (data) => {
  const { msg, status } = data;
  const error = new Error(msg);
  error.code = status;
  throw error;
};

module.exports = { handleError, hashPassword, createUserToken };
