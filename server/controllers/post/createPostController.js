const jwt = require('jsonwebtoken');
const createPostQuery = require('../../database/queries/post/createPostQuery');

const { ACCESS_TOKEN_KEY } = process.env;

const createPostController = (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, ACCESS_TOKEN_KEY, (err, user) => {
    if (err) return err;
    const { title, body } = req.body;
    const { id } = user;
    return createPostQuery(title, body, id)
      .then(() => res.status(201).json({ msg: 'Post created successfully' }))
      .catch(() => res.status(400).json({ msg: 'Failed to create post.' }));
  });
};

module.exports = createPostController;
