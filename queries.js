/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  Listings.find({name: 'Library West'}, function(err, listings){
    //Error throw
    if(err) throw err;

    //Log library west info to console
    console.log(listings);
  })
};

var removeCable = function() {
  //Find the CABL listings
  Listings.find({code: 'CABL'}, function(err, listing){
    if(err) throw err;

    //Remove CABLE listings
    listing.remove(function(err){
      if(err) throw err;

      console.log('CABL Listings successfully deleted!');
    })
  })
};

var updatePhelpsLab = function() {
  Listing.findOneAndUpdate({name: 'Phelps Laboratory'}, {address: '1953 Museum Rd, Gainesville, FL 32603, United States'}, 
      function(err, listing){
        //Throw error if error
        if (err) throw err;

        //Display new listing
        console.log(listing);
  })
};

var retrieveAllListings = function() {
  //Find all listings with blank req.
  Listing.find({}, function(err, listings){
    if (err) throw err;

    //Print them all out
    console.log(listings);
  })
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();