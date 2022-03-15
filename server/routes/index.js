const path = require('path');
const router = require('express').Router();
const { homeController, postController } = require('../controllers');
const { homePage, signupPage } = require('../controllers/pagesController');
const signupController = require('../controllers/validation');
const ensureAuthenticated = require('../utils/ensureAuthenticated');

router.get('/signup', signupPage);
router.post('/api/v1/signup', signupController);
// router.get('/logout', signupPage);
router.get('/', ensureAuthenticated, homePage);
router.get('/api/v1/posts', homeController);
router.post('/api/v1/post', postController);

module.exports = router;
