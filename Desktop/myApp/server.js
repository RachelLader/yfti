var express = require('express');
bodyParser = require('body-parser');


// Define Express
var app = express();


app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));
// Call the middleware function and pass the app and express as parameters

// Define Server Port
var port = process.env.PORT || 8100;
// Console Log
console.log('listening on port:', port);
// Define Express Listening Port
app.listen(port);
app.use(express.static(__dirname + '/www'));


app.get('/getPhotos', function(){

})