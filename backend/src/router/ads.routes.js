const {Router} = require('express')
const router = new Router()
const adsContoller = require('../controllers/ads.contoller')

router.get("/")


router.post("/create", adsContoller.create)

router.get("/myAds")
router.get("/myAds/:id")
router.delete("/myAds/:id")
router.put("/myAds/:id")
router.post("/myAds")

module.exports = router