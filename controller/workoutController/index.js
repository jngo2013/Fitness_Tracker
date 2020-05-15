const Exercise = require('../../models');


module.exports ={
  addWorkout:(res)=> {
    try {
      const newWorkout = await new Exercise({ type, name, duration, weight, reps, sets }).save();
      //push to data
      return res.status(200).json(newWorkout);
    } catch(e) {

    }
  }
}