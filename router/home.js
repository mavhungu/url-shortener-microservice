const express = require('express')
const router = express.Router()
<<<<<<< HEAD
const home = require('../controllers/home')
=======
const home = require('../controller/homeController')
>>>>>>> 7271604d3a1b12c08f6c59294580be2bed13692c

router.route('/')
.get(home)

<<<<<<< HEAD
module.exports = router;
=======
module.exports = home
>>>>>>> 7271604d3a1b12c08f6c59294580be2bed13692c
