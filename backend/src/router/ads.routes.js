const {Router} = require('express')
const router = new Router()
const adsContoller = require('../controllers/ads.contoller')
const passport = require('passport')
// const AuthMiddleware = passport.authenticate("jwt", {session: false}, function (req,res ){console.log(req)})

router.get("/")


router.post("/create", passport.authenticate("jwt", {session: false}), adsContoller.create)

router.get("/myAds", adsContoller.getAll);
router.get("/myAds/:id", adsContoller.getOne);
router.delete("/myAds/:id", adsContoller.delete);
router.put("/myAds/:id", adsContoller.update);
router.post("/myAds", adsContoller.create);

module.exports = router