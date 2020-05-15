const router = require('express').Router();
const exercise = require('./exerciseRoutes')


// /api prepended to everyRoute inside of here
router.use('/exerciseRoutes', exercise);

router.use ('/stats', exercise);

module.exports = router;