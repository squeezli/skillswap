const {Router} = require('express')
const router = new Router()
const adsContoller = require('../controllers/ads.contoller')
const passport = require('passport')
// const AuthMiddleware = passport.authenticate("jwt", {session: false}, function (req,res ){console.log(req)})

router.get("/")


router.post("/create", passport.authenticate("jwt", {session: false}), adsContoller.create)

router.get("/myAds")
router.get("/myAds/:id")
router.delete("/myAds/:id")
router.put("/myAds/:id")
router.post("/myAds")

module.exports = router