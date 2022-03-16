const connection = require('../../config/connection');

const renderPosts = (query) => {
  const limit = 5;

  let offset = 0;
  if (query.page > 1) {
    offset = query.page ? query.page * 5 - 1 : 5;
  }

  return connection.query(
    'SELECT p.id, p.title, p.body, u.name FROM posts as p JOIN users as u ON (p.user_id=u.id) ORDER BY p.id DESC LIMIT $1 OFFSET $2;',
    [limit, offset]
  );
};

module.exports = renderPosts;
