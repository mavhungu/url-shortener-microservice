const express = require('express')
const router = express.Router()
const shorturlController = require('../controllers/shorturlController')

router.route('/')
.get(shorturlController)

module.exports = router;