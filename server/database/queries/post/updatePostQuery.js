const connection = require('../../config/connection');

const updatePost = (title, body, postId) => {
  const sql = 'UPDATE posts SET title = $1, body = $2 WHERE id = $3;';
  const values = [title, body, postId];
  return connection.query(sql, values);
};

module.exports = updatePost;
