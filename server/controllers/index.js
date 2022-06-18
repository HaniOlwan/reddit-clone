const homeController = require('./homeController');
const {
  homePage, loginPage, signupPage, createPostPage, editPostPage, notFoundPage,
} = require('./pagesController');

const {
  createPostController, editPostController, deletePostController, getPostController,
} = require('./post');
const { signupController, loginController, logoutController } = require('./validation');

module.exports = {
  homePage,
  loginPage,
  signupPage,
  createPostPage,
  editPostPage,
  notFoundPage,
};

module.exports = {
  signupController,
  loginController,
  getPostController,
  createPostController,
  deletePostController,
  editPostController,
  homeController,
  logoutController,
};
