const router = require('express').Router();
const {statsWorkout} = require('../../../controller/workoutController')

router.get("/", statsWorkout);

module.exports = router;