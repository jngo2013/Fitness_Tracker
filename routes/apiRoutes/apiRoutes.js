const router = require('express').Router();
const workout = require('./workoutRoutes/index');
const stats = require('./statsRoutes');

router.use('/workouts', workout);

router.use ('/workouts/range', stats);

module.exports = router;