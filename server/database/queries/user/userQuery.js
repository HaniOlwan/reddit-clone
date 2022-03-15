const connection = require('../../config/connection');

const findUser = (email) => {
  const sql = 'SELECT exists (SELECT 1 FROM users WHERE email = $1 LIMIT 1);';
  const values = [email];
  return connection.query(sql, values);
};

const registerUser = (email, username, password) => {
  const sql =
    'INSERT INTO users (email,username,password) VALUES ($1,$2,$3) RETURNING *;';
  const values = [email, username, password];
  return connection.query(sql, values);
};

module.exports = { registerUser, findUser };
