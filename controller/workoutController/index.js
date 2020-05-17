const { Workout } = require('../../models');


module.exports ={
 
  addWorkout:(req, res) => {
    console.log("this is a post");
    Workout.create({})
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },
  getWorkout:(req, res) => {
    console.log("this is a get")
    Workout.find({})
    .then(Workout => {
      res.json(Workout);
    })
    .catch(err => {
      res.status(400).json(err);
    })
  },
  putWorkout: ({ body, params }, res) => {
    console.log("this is a put")
    Workout.findByIdAndUpdate(params.id ,{$push: {exercises: body}}, {new: true})
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  },
  statsWorkout: (req, res) => {
    Workout.find({}).limit(7)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
}