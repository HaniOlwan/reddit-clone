const router = require('express').Router();
const { homeController, postController } = require('../controllers');
const signupController = require('../controllers/validation');
const ensureAuthenticated = require('../utils/ensureAuthenticated');
const logoutUser = require('../controllers/logoutController');
const page = require('../controllers/pagesController');
const loginController = require('../controllers/validation/signinController');

router.get('/login', page.loginPage);
router.get('/signup', page.signupPage);
router.get('/', ensureAuthenticated, page.homePage);
router.get('/post', ensureAuthenticated, page.createPostPage);

router.post('/api/v1/login', loginController);
router.post('/api/v1/signup', signupController);
router.post('/api/v1/user/logout', logoutUser);
router.get('/api/v1/posts', homeController); // test
router.post('/api/v1/user/post', postController);

router.use(page.notFoundPage);

module.exports = router;
