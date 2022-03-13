const connection = require('../../config/connection');

const findUser = (email, username) => {
  const sql = 'SELECT email FROM users WHERE email=$1 OR username=$2;';
  const values = [email, username];
  return connection.query(sql, values);
};

const registerUser = (email, username, password) => {
  const sql = 'INSERT INTO users (email,username,password) VALUES ($1,$2,$3);';
  const values = [email, username, password];
  return connection.query(sql, values);
};

module.exports = { registerUser, findUser };
