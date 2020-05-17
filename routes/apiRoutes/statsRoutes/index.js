const router = require('express').Router();
const Workout = require('../../../models/Workout')

router.get("/", (req, res) => {
  Workout.find({}).limit(7)
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;