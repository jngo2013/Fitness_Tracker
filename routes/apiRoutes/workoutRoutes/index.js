const router = require('express').Router();
const Workout = require('../../../models/Workout');

// router.post('/workouts', postWorkout)
// router.get('/stats')
router.get("/", (req, res) => {
  console.log("this is a get")
  Workout.find({})
  .then(Workout => {
    res.json(Workout);
  })
  .catch(err => {
    res.status(400).json(err);
  })
})



router.post("/", (req, res) => {
  console.log("this is a post");
  Workout.create({})
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/:id", ({ body, params }, res) => {
  console.log("this is a put")
  Workout.findByIdAndUpdate(params.id ,{$push: {exercises: body}}, {new: true})
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;