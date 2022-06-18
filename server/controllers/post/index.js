const createPostController = require('./createPostController');
const deletePostController = require('./deletePostController');
const editPostController = require('./editPostController');
const getPostController = require('./getPostController');

module.exports = {
  createPostController, getPostController, editPostController, deletePostController,
};
