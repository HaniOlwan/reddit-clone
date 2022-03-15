const connection = require('../../config/connection');

const findUser = (email) => {
  const sql = 'SELECT exists (SELECT 1 FROM users WHERE email = $1 LIMIT 1);';
  const values = [email];
  return connection.query(sql, values);
};

const registerUser = (email, password) => {
  const sql = 'INSERT INTO users (email,password) VALUES ($1,$2) RETURNING *;';
  const values = [email, password];
  return connection.query(sql, values);
};

module.exports = { registerUser, findUser };
