const connection = require('../../config/connection');

const createPost = (title, body, userId) => {
  const sql = 'INSERT INTO posts (title,body,user_id) VALUES ($1,$2,$3);';
  const values = [title, body, userId];
  return connection.query(sql, values);
};

module.exports = createPost;
