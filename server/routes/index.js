const path = require('path');
const router = require('express').Router();
const { homeController, postController } = require('../controllers');
const signupController = require('../controllers/validation');
const ensureAuthenticated = require('../utils/ensureAuthenticated');
const logoutUser = require('../controllers/logoutController');
const page = require('../controllers/pagesController');

router.get('/signup', page.signupPage);
router.post('/api/v1/signup', signupController);
router.post('/api/v1/user/logout', logoutUser);
router.get('/', ensureAuthenticated, page.homePage);
router.get('/api/v1/posts', homeController);
router.post('/api/v1/post', postController);
router.get('/post', page.createPostPage);

module.exports = router;
