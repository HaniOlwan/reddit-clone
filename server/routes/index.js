const path = require('path');
const router = require('express').Router();
const { homeController, postController } = require('../controllers');
const { homePage } = require('../controllers/pagesController');
const signupController = require('../controllers/validation');
const ensureAuthenticated = require('../utils/ensureAuthenticated');

router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'pages', 'signup.html'));
});

router.get('/', ensureAuthenticated, homePage);
router.get('/api/v1/posts', homeController);
router.post('/api/v1/post', postController);
router.post('/api/v1/signup', signupController);

module.exports = router;
