const getPost = require('../../database/queries/post/getPost');

const getPostController = (req, res) => {
  const { post } = req.params;
  getPost(post).then((result) => res.json(result.rows[0]));
};

module.exports = getPostController;
