const assert = require('assert');

const updateDocument = function(db, callback){
	const moviesCollection = db.collection('myMovies');

	moviesCollection.updateOne({movie: "The Banker"},
     { $set: {movie: "Logan", year: "2017", rating: 8.1} }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);

    console.log("Updated The Banker document");
   	console.log(result.result);   
   	callback(result);
  });
};

const findUpdate = function(db,callback){
	const moviesCollection = db.collection('myMovies');

	 moviesCollection.find({}).toArray(function(err, docs){
	 assert.equal(err, null);

	 console.log("Showing updated collection");
	 console.log(docs);
	 callback(docs);
	});
}

exports.updateDocument = updateDocument;
exports.findUpdate = findUpdate;