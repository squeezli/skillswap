const {Router} = require('express')
const router = new Router()

router.get("/:id")
router.delete('/:id');
router.put('/:id');

module.exports = router