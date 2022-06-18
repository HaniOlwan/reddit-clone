const router = require('express').Router();
const {
  homeController,
  createPostController,
  deletePostController,
  getPostController,
  editPostController,
  loginController,
  signupController,
  logoutController,
} = require('../controllers');
const ensureAuthenticated = require('../utils/ensureAuthenticated');
const page = require('../controllers/pagesController');

router.get('/login', page.loginPage);
router.get('/signup', page.signupPage);
router.get('/', ensureAuthenticated, page.homePage);
router.get('/post', ensureAuthenticated, page.createPostPage);
router.get('/edit/post/:post', ensureAuthenticated, page.editPostPage);

router.post('/api/v1/login', loginController);
router.post('/api/v1/signup', signupController);
router.post('/api/v1/user/logout', logoutController);
router.get('/api/v1/posts', homeController);
router.get('/api/v1/posts/:post', getPostController);
router.post('/api/v1/post/create', createPostController);
router.delete('/api/v1/delete/:post', deletePostController);
router.post('/api/v1/edit/post/:post', getPostController);
router.put('/api/v1/edit/post/:post', editPostController);

router.use(page.notFoundPage);

module.exports = router;
