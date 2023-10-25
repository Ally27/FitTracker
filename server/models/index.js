const User = require('./User');
const Event = require('./Event');
const Workout = require('./Workout');

module.exports = { User, Event, Workout };
// when user creates a event that belongs to user.
//  the program will save that event and display it,
//  depending how close or far the date is you will get warnings.
// eveent will hold day, time, note, yes or no if worked out.
// create workouts and be able to open a menu to quickly sleect workout and assign it a event.