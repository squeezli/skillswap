const {Router} = require('express')
const router = new Router()

const userRouter = require('./user.routes');
const adsRouter = require('./ads.routes');
const profileRouter = require('./profile.routes');
const chatRouter = require('./chat.routes');

router.use('user',userRouter);
router.use('ads',adsRouter);
router.use('profile',profileRouter);
router.use('chat',chatRouter);

module.exports = router