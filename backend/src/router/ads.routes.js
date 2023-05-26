const {Router} = require('express')
const router = new Router()

router.get("/")
router.get("/:id")

router.get("/myAds")
router.get("/myAds/:id")
router.delete("/myAds/:id")
router.put("/myAds/:id")
router.post("/myAds")

module.exports = router