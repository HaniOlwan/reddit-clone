const path = require('path');

const homePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'pages', 'index.html'));
};

const loginPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'pages', 'login.html'));
};

const signupPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'pages', 'signup.html'));
};

const createPostPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'pages', 'createpost.html'));
};

const editPostPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'pages', 'editpost.html'));
};

const notFoundPage = (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', '..', 'public', 'pages', 'error_pages', '404.html')
  );
};

module.exports = {
  homePage,
  loginPage,
  signupPage,
  createPostPage,
  editPostPage,
  notFoundPage,
};
