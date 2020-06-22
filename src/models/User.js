/*

USER.JS

This file defines the structure of the user data

*/

// import from mongoose the modules for declare models and schemas
const { Schema, model } = require('mongoose');

// define the schema for users
const userSchema = new Schema({
    firstname: {
        type: String,
        unique: true,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
});


// export the data model
module.exports = model('User', userSchema);