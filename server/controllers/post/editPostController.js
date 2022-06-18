const jwt = require('jsonwebtoken');
const updatePost = require('../../database/queries/post/updatePostQuery');
const whoIsTheUser = require('../../database/queries/post/whoIsTheUser');

const { ACCESS_TOKEN_KEY } = process.env;

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

module.exports = editPostController;
