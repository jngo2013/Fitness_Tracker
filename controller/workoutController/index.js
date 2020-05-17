const Exercise = require('../../models/Workout');


module.exports ={
  addWorkout:({ body }, res)=> {
    try {
      const newWorkout = await new Exercise( body ).save();
      //push to data
      return res.status(200).json(newWorkout);
    } catch(e) {

    }
  }
}