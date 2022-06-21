const { Router } = require('express');
const postRouter = require('./postRouter');
const userRouter = require('./userRouter');

const router = Router();

router.use(postRouter);
router.use(userRouter);

module.exports = router;
