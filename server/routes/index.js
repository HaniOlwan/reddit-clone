const router = require('express').Router();
const { homeController, postController } = require('./../controllers');

router.get('/api/v1/posts', homeController);
router.post('/api/v1/post', postController);
module.exports = router;
