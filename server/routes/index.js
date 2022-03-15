const path = require('path');
const router = require('express').Router();
const { homeController, postController } = require('../controllers');
const signupController = require('../controllers/validation');
const ensureAuthenticated = require('../utils/ensureAuthenticated');
const logoutUser = require('../controllers/logoutController');
const page = require('../controllers/pagesController');
const signinController = require('../controllers/validation/signinController');

router.get('/signin', page.signinPage);
router.post('/api/v1/signin', signinController);
router.get('/signup', page.signupPage);
router.post('/api/v1/signup', signupController);
router.post('/api/v1/user/logout', logoutUser);
router.get('/', ensureAuthenticated, page.homePage);
router.get('/api/v1/posts', homeController); // test
router.get('/post', ensureAuthenticated, page.createPostPage);
router.post('/api/v1/user/post', postController);

module.exports = router;
