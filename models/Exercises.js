const { Schema, model } = require('mongoose');

const ExerciseSchema = new Schema({
  type: String,
  name: String,
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number
})

module.exports = model('Exercise', ExerciseSchema);