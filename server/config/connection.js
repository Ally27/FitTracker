const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://desktop-admin:kato@cluster0.0epry.mongodb.net/');

module.exports = mongoose.connection;
