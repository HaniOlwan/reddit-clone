const postsQuery = require('../database/queries/postsQuery');

const homeController = (req, res) => postsQuery().then((posts) => res.json(posts.rows));
module.exports = homeController;
