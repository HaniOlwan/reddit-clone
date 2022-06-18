const jwt = require('jsonwebtoken');
const createPostQuery = require('../../database/queries/post/createPostQuery');

const { ACCESS_TOKEN_KEY } = process.env;

const createPostController = (req, res) => {
  const token = req.headers.cookie.split('=')[1];
  jwt.verify(token, ACCESS_TOKEN_KEY, (err, user) => {
    if (err) return err;
    const { title, body } = req.body;
    const { id } = user;
    return createPostQuery(title, body, id).then(() => res.status(200).json({ msg: 'Post created' }))
      .catch(() => res.status(400).json({ msg: 'Failed to create post.' }));
  });
};

module.exports = createPostController;
