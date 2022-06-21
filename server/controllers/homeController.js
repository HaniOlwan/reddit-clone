const renderPosts = require('../database/queries/post/postsQuery');

const homeController = (req, res) => renderPosts(req.query).then((posts) => res.json(posts.rows));
module.exports = homeController;
