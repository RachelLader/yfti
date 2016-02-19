var express = require('express');
bodyParser = require('body-parser');
var mongoose = require('mongoose');
var http = require('http');
var path = require('path');



// Define Express
var app = express();
var port = process.env.PORT || 8101;
// Console Log
console.log('listening on port:', port);
// Define Express Listening Port
app.listen(port);
app.use(express.static(__dirname + '/www'));

// app.use(bodyParser.json({
//     limit: '50mb'
// }));
// app.use(bodyParser.urlencoded({
//     extended: true,
//     limit: '50mb'
// }));


var uri = 'mongodb://RachelLader:Trumpet@ds011268.mongolab.com:11268/yfti'

mongoose.connect(uri)

db= mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected to mongoDb')
    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: String,
        birthday: Date,
        address: String,
        city: String,
        state: String,
        parentFirst: String,
        parentLast: String,
        parentEmail: String,
        foodAllergies: String,
        other: String,
        emergencyName: String,
        emergencyNumber: String,
        registeredFor: Array
    })

    var eventSchema = mongoose.Schema({
        title: String,
        date: Date,
        price: Number,
        likes: Number,
        description: String,
        location: String
    })

    var User = mongoose.model('users', userSchema);
    var Event = mongoose.model('events', eventSchema);


app.post('/api/registerUser', function(req,res) {
	console.log('In registerUser', req.query)
	var saveUser= JSON.parse(req.query.user)
    var register = new User({
        firstName: saveUser.firstName,
        lastName: saveUser.lastName,
        email: saveUser.email,
        phoneNumber: saveUser.phoneNumber,
        birthday: saveUser.birthday,
        address: saveUser.address,
        city: saveUser.city,
        state: saveUser.state,
        parentFirst: saveUser.parentFirst,
        parentLast: saveUser.parentLast,
        parentEmail: saveUser.parentEmail,
        foodAllergies: saveUser.allergies,
        other: saveUser.other,
        emergencyName: saveUser.emergency,
        emergencyNumber: saveUser.emergencyNumber,
        registeredFor: []
    })

    register.save(function(err){
    	console.log('error saving user')
    	res.send('hey user was saved')
    });
})
})



// Call the middleware function and pass the app and express as parameters

// Define Server Port

