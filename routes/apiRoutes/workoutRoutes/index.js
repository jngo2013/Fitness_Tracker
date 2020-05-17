const router = require('express').Router();
const { addWorkout, getWorkout, putWorkout } = require('../../../controller/workoutController')


router.get("/", getWorkout)

router.post("/", addWorkout);

router.put("/:id", putWorkout);

module.exports = router;