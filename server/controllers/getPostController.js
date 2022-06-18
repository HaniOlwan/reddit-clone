const jwt = require('jsonwebtoken');

const { ACCESS_TOKEN_KEY } = process.env.ACCESS_TOKEN_KEY;
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
  if (title.length <= 5 || body.length <= 8) {
    res.sendStatus(422);
    throw new Error('input invalid');
  }
  jwt.verify(token, ACCESS_TOKEN_KEY, (err, user) => {
    const userId = user.id;
    whoIsTheUser(userId, postId).then((result) => {
      if (result.rowCount === 0) {
        res.sendStatus(401);
      } else {
        updatePost(title, body, postId).then(() => {
          res.sendStatus(200);
        });
      }
    });
  });
};

module.exports = { getPostController, editPostController };
