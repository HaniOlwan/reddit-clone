const { Router } = require('express');

const {
  homeController,
  createPostController,
  deletePostController,
  getPostController,
  editPostController,
} = require('../controllers');
const page = require('../controllers/pagesController');
const ensureAuthenticated = require('../utils/ensureAuthenticated');

const postRouter = Router();

postRouter.get('/post', ensureAuthenticated, page.createPostPage);
postRouter.get('/edit/post/:post', ensureAuthenticated, page.editPostPage);

postRouter.get('/api/v1/posts', homeController);
postRouter.get('/api/v1/posts/:post', getPostController);
postRouter.post('/api/v1/post/create', createPostController);
postRouter.delete('/api/v1/delete/:post', deletePostController);
postRouter.post('/api/v1/edit/post/:post', getPostController);
postRouter.put('/api/v1/edit/post/:post', editPostController);

module.exports = postRouter;
