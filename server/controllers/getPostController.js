const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_KEY } = require('../../config');
const whoIsTheUser = require('../database/queries/post/whoIsTheUser');

const getPost = require('../database/queries/post/getPost');
const updatePost = require('../database/queries/post/updatePostQuery');

const getPostController = (req, res) => {
  const { post } = req.params;
  getPost(post).then((result) => res.json(result.rows[0]));
};

const editPostController = (req, res) => {
  const postId = req.params.post;
  const { title, body } = req.body;
  const { token } = req.cookies;
  jwt.verify(token, ACCESS_TOKEN_KEY, (err, user) => {
    const userId = user.id;
    whoIsTheUser(userId, postId).then((result) => {
      if (result.rowCount === 0) {
        res.send(401);
      } else {
        updatePost(title, body, postId).catch(() => {
          res.send(422);
        });
      }
    });
  });
};

module.exports = { getPostController, editPostController };
