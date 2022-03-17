const connection = require('../../config/connection');

const whoIsTheUser = (userId, postId) =>
  connection.query('SELECT * FROM posts WHERE id = $1 AND user_id = $2;', [
    postId,
    userId,
  ]);

module.exports = whoIsTheUser;
