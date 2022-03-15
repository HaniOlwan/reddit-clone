const jwt = require('jsonwebtoken');
const createPost = require('../database/queries/user/userQuery');
const { ACCESS_TOKEN_KEY } = require('../../config');

const postController = (req, res) => {
  const token = req.headers.cookie.split('=')[1];
  jwt.verify(token, ACCESS_TOKEN_KEY, (err, user) => {
    if (err) return console.log(err);

    const { title, body } = req.body;
    const { id } = user;
    createPost(title, body, id).then(console.log).catch(console.log);
  });
};

module.exports = postController;
