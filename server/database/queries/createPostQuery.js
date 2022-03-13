const connection = require('../config/connection');

module.exports = (title, body, userId) =>
  connection.query('INSERT INTO posts(title,body,user_id) VALUES ($1 , $2 , $3);', [
    title,
    body,
    userId,
  ]);
