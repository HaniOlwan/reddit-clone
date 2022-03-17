const deletePostQuery = require('../database/queries/post/deletePostQuery');
const deletePost = (req, res) => {
  const { post } = req.params;
  deletePostQuery(post)
    .then(() => res.status(202).json({ msg: 'Post deleted' }))
    .catch((err) => console.log(err));
};

module.exports = deletePost;
