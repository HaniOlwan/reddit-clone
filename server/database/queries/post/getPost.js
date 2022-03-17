const connection = require('../../config/connection');

const getPost = (postId) => {
  const sql = 'SELECT * FROM posts WHERE id = $1;';
  const values = [postId];
  return connection.query(sql, values);
};

module.exports = getPost;
