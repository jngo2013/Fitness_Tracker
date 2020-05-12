const router = require('express').Router();


// /api prepended to everyRoute inside of here
router.use('/todos', todoRoutes);

module.exports = router;
