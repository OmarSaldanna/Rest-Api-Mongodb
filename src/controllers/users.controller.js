/*

USERS.CONTOLLER.JS

This file contains and export the functions for the route of users

*/

// declare an object for contain the functions
const usrCtrl = {};

// import the data model for the db queries
const User = require('../models/User');


/* Note: the req and res objects have a function:

> req: contains the data from the HTTP request, if there are params in the route, this 
params are in 'req.params'. For example, an id: ' id = req.params.id '. And the user data is sended in an object, the data will be in 'req.body'

> res: this object makes the response with data from db. For example: get the user data in 
'user' and send a response 'res.json(user)'.

And use 'async' for functions, and 'await' for large process, this is because we want that
the proces end, and then continue with the next line, if it does not use async-await the 
the program wont end the process at time and the result wont be allow to read.
*/

// get, get all the users
usrCtrl.getUsers = async (req, res) => {
    // get all the users
    const users = await User.find();
    // response with all the users
    res.json(users);
}

// post, create a new user
usrCtrl.createUser = async (req, res) => {
    // get all the data from the new user from req.body
    const { firstname, lastname, city } = req.body;
    // declare an object with the new user data
    const newUser = new User({
        firstname: firstname,
        lastname: lastname,
        city: city
    });
    // save the user trough the db model
    await newUser.save();
    // send a response, it can contains whatever
    res.json({res:true});
}

// get + id, get a user finding by an id
usrCtrl.getUserById = async (req, res) => {
    // get the id
    const id = req.params.id;
    // find the user
    const user = await User.findById(id);
    // response with the user
    res.json(user);
}

// put + id, find a user by an id and update something
usrCtrl.updateUserById = async (req, res) => {
    // get the update, it could be like { name: 'new name' }
    const update = req.body;
    // get the id 
    const id = req.params.id;
    // excute the update 
    await User.findByIdAndUpdate(id, update, () => {
        // send a response trough a callback
        res.json({ message: 'User Updated' })
    });
}

// delete + id, delete a user with an id
usrCtrl.deleteUserById = async (req, res) => {
    // get the id
    const id = req.params.id;
    // delete the user
    await User.findByIdAndDelete();
    // send a response
    res.json('User Deleted');
}

// get + username, get an user by a name
usrCtrl.getUserByName = async (req, res) => {
    // get the name or firstname
    const firstname = req.params.name;
    // declare a filter to find a user
    const filter = { firstname: firstname };
    // find the user
    const user = await User.findOne(filter);
    // response with the user
    res.json(user);
}

// get + city, get users from a city
usrCtrl.getUsersByCity = async (req, res) => {
    // get the city
    const city = req.params.city;
    // declare the filter
    const filter = { city: city };
    // find users from the city
    const users = await User.find(filter);
    // response with the users
    res.json(users);
}

// export the functions
module.exports = usrCtrl;