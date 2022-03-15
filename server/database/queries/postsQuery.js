const connection = require('./../config/connection');

module.exports = () =>
  connection.query(
    'SELECT * FROM posts as p JOIN users as u ON (p.user_id=u.id) ORDER BY p.id DESC;'
  );
