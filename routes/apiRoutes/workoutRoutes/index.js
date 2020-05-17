const router = require('express').Router();
const { addWorkout, getWorkout, putWorkout } = require('../../../controller/workoutController')

// router.post('/workouts', postWorkout)
// router.get('/stats')
router.get("/", getWorkout)

router.post("/", addWorkout);

router.put("/:id", putWorkout);

module.exports = router;