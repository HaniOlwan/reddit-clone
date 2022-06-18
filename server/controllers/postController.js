const jwt = require('jsonwebtoken');
const createPost = require('../database/queries/post/createPostQuery');

const { ACCESS_TOKEN_KEY } = process.env.ACCESS_TOKEN_KEY;

const postController = (req, res) => {
  const token = req.headers.cookie.split('=')[1];
  jwt.verify(token, ACCESS_TOKEN_KEY, (err, user) => {
    if (err) return err;
    const { title, body } = req.body;
    const { id } = user;
    return createPost(title, body, id).then(() => res.status(200).json({ msg: 'Post created' }));
  });
};

module.exports = postController;
