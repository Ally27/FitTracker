const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
  eventDate: {
    type: Date,
    default: Date.now
  },
  dailyWorkout: {
    type: Boolean,
    default: false
  },
  note: [
    {
      type: String,
      trim: true
    }
  ],
  workoutsList: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }
  ]
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
