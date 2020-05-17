const router = require('express').Router();
const workout = require('./workoutRoutes/index');
const stats = require('./statsRoutes');

// router.get('/workouts/', function(){
//   console.log("workout routes")
// })
// /api prepended to everyRoute inside of here
router.use('/workouts', workout);

router.use ('/workouts/range', stats);

module.exports = router;