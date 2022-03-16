const connection = require('../../config/connection');

const findUser = (email) => {
  const sql = 'SELECT exists (SELECT 1 FROM users WHERE email = $1 LIMIT 1);';
  const values = [email];
  return connection.query(sql, values);
};

const registerUser = (name, email, password) => {
  const sql = 'INSERT INTO users (name,email,password) VALUES ($1,$2,$3) RETURNING *;';
  const values = [name, email, password];
  return connection.query(sql, values);
};

const getUser = (email) => {
  const sql = 'SELECT * FROM users WHERE email = $1';
  const values = [email];
  return connection.query(sql, values);
};

module.exports = { findUser, registerUser, getUser };
