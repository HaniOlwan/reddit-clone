const deletePostQuery = require('../../database/queries/post/deletePostQuery');

const deletePostController = (req, res) => {
  const { post } = req.params;
  deletePostQuery(post)
    .then(() => res.status(202).json({ msg: 'Post deleted' }))
    .catch((err) => (err));
};

module.exports = deletePostController;
