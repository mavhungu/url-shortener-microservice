const express = require('express')
const router = express.Router()
const {getShorturlByCodeHandler, postShorturlHandler} = require('../controllers/shorturlController')

router.route('/')
.post(postShorturlHandler)
router.route('/:short_url')
.get(getShorturlByCodeHandler)


module.exports = router;