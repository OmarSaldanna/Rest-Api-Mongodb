/*

> DATABASE.JS

This file init an configure the db system, in this case MongoDB

start the db:
$ brew services start mongodb-community@4.2

stop the db:
$ brew services stop mongodb-community@4.2

*/

// Import mongoose for use the db
const mongoose = require('mongoose');

// Read the .env file that contains the db route
const URI = process.env.MONGODB_URI;

// db settings
mongoose.connect(URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// connect to the db
const connection = mongoose.connection;

// once the db have been connected, print a confirmation
connection.once('open',() => {
    // print the confirmation
    console.log('DB is connected :)');
});
