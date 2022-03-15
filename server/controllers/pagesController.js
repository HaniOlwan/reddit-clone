const path = require('path');

const homePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'pages', 'index.html'));
};

const signupPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'pages', 'signup.html'));
};

const createPostPage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'pages', 'createpost.html'));
};

module.exports = { homePage, signupPage, createPostPage };
