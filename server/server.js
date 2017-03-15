const express = require('express');
const dynamo = new doc.DynamoDB();
const router = require('./router.js');
const AWS = require('aws-sdk');

const app = express();

app.listen(1337, function() {
  console.log('Server is now listening on Port 1337');
});


/* * * * * * * * * * 
 *                 *
 *    User API     *
 *                 *
 * * * * * * * * * */

// Returns collection of all users
app.get('/api/users', function(req, res) {
  
});

// Returns a specific user
app.get('/api/users/:userID', function(req, res) {

});

// Creates a new user
app.post('/api/users', function(req, res) {

});

// Returns a collection of all productions associated with a user
app.get('/api/users/:userID/productions', function(req, res) {

});

// Returns with a JSON of a specific user's settings
app.get('/api/users/:userID/settings', function(req, res) {

});

// Adds/updates a specific user's settings
app.post('/api/users/:userID/settings', function(req, res) {

});


/* * * * * * * * * * 
 *                 *
 * Production API  *
 *                 *
 * * * * * * * * * */

// Return all productions
app.get('/api/productions', function(req, res) {

});

// Return a specific production
app.get('/api/productions/:productionID', function(req, res) {

});

// Returns a collection of all crew members for a specific production
app.get('/api/productions/:productionID/crew', function(req, res) {

});

// Creates a new production
app.post('/api/productions', function(req, res) {

});



