const jwt = require('jsonwebtoken');
const { createPost } = require('../database/queries/user/userQuery');
const { ACCESS_TOKEN_KEY } = require('../../config');
const { handleError } = require('./../utils/helpers');
const postController = (req, res, next) => {
  const token = req.headers.cookie.split('=')[1];
  jwt.verify(token, ACCESS_TOKEN_KEY, (err, user) => {
    if (err) return handleError({ msg: "User isn't verified", status: 401 });
    const { title, body } = req.body;
    const { id } = user;
    createPost(title, body, id)
      .then(() => res.status(200).json({ msg: 'Post created' }))
      .catch(next);
  });
};

module.exports = postController;
