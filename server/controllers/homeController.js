const postsQuery = require('../database/queries/postsQuery');

const homeController = (req, res) =>
  postsQuery(req.query).then((posts) => res.json(posts.rows));
module.exports = homeController;
