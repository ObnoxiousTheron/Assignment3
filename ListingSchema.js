/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Listings Schema */
var listingSchema = new Schema({
  code: String,
  name: String,
  coordinates: {
    latitude: {type: Number, required: false},
    longitude: {type: Number, required: false},
  },

  address: {type: String, required: false},

  created_at: Date,
  updated_at: Date
});

/* create a 'pre' function that adds the updated_at (and created_at if not already there) property */
listingSchema.pre('save', function(next) {
  //Get current date
  var currentDate = new Date();

  //Change the updated_at field to current date
  this.updated_at = currentDate;
  
  //If created_at doesn't exist, add to that field
  if(!this.created_at)
  this.created_at = currentDate;

  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
