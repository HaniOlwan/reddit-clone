const path = require('path');
const fs = require('fs');
const router = require('express').Router();
const { homeController, postController } = require('./../controllers');

router.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'pages', 'signup.html'));
});
router.get('/api/v1/posts', homeController);
router.post('/api/v1/post', postController);
module.exports = router;
