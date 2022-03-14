const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_KEY } = require('../../config');

const ensureAuthenticated = (req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, ACCESS_TOKEN_KEY, (err, user) => {
      if (err) return res.status(403);
      req.user = user;
      next();
    });
  } else {
    res.status(403);
    res.redirect('/signup');
  }
};

module.exports = ensureAuthenticated;
