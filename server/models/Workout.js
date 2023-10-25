const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  Set: {
    type: Number,
    default: 0,
  },
  repetition: {
    type: Number,
    default: 0,
  },
  description: [
    {
      type: String,
      trim: true
    }
  ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
