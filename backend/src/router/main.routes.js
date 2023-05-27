const {Router} = require('express')
const router = new Router()

const userRouter = require('./user.routes');
const adsRouter = require('./ads.routes');
const profileRouter = require('./profile.routes');
const chatRouter = require('./chat.routes');
const authRouter = require('./auth.routes');

router.use('/user',userRouter);
router.use('/auth',authRouter);
router.use('/ads',adsRouter);
router.use('/profile',profileRouter);
router.use('/chat',chatRouter);

module.exports = router