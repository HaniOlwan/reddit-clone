const connection = require('../../config/connection');

const deletePost = (postId) => {
  const sql = 'DELETE FROM posts WHERE id = $1;';
  const values = [postId];
  return connection.query(sql, values);
};

module.exports = deletePost;
