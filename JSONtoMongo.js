'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds016068.mlab.com:16068/assignment3');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 

                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       


mongoose.connect(uri, options);

var conn = mongoose.connection;             

conn.on('error', console.error.bind(console, 'connection error:'));  
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */


/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */