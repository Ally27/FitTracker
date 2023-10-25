const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI ||  'mongodb://localhost/Fit_Tracker_db', );

module.exports = mongoose.connection;
