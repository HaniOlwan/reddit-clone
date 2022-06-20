const { Router } = require('express');
const {
  loginController,
  signupController,
  logoutController,
} = require('../controllers');
const ensureAuthenticated = require('../utils/ensureAuthenticated');
const page = require('../controllers/pagesController');

const userRouter = Router();
userRouter.get('/login', page.loginPage);
userRouter.get('/signup', page.signupPage);
userRouter.get('/', ensureAuthenticated, page.homePage);

userRouter.post('/api/v1/login', loginController);
userRouter.post('/api/v1/signup', signupController);
userRouter.post('/api/v1/user/logout', logoutController);

userRouter.use(page.notFoundPage);

module.exports = userRouter;
