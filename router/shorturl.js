const express = require('express')
const router = express.Router()
const loggerMiddleware = require('../middleware/loggerMiddleware')
const {getShorturlByCodeHandler, postShorturlHandler} = require('../controllers/shorturlController')

router.route('/')
.post(loggerMiddleware, postShorturlHandler)
router.route('/:short_url')
.get(loggerMiddleware, getShorturlByCodeHandler)


module.exports = router;