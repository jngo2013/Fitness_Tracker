const { Schema, model } = require('mongoose');

const WorkoutSchema = new Schema({
  day: { type: Date, default: Date.now},
  exercises: 
  [
    {
      type:{ type: String},
      name: { type: String},
      duration: Number,
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ]
},
{
  toJSON: {
    virtuals: true
  }
}
);
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0)
})


module.exports = model('Exercise', WorkoutSchema);