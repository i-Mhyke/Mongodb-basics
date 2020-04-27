const assert = require('assert');

const findDocuments = (db, callback) =>{
	const moviesCollection = db.collection('myMovies');

	moviesCollection.findOne({}, function(err, docs){
		assert.equal(err, null);

		console.log('Showing first movie in the collection');
		console.log(docs);
		callback(docs)
	});
	moviesCollection.find({rating:{$eq : 7}}).toArray(function(err, docs){
		assert.equal(err, null);

		console.log('Showing all movies with rating: 7');
		console.log(docs);
		callback(docs);
	});
	moviesCollection.find({}, { projection: { _id: 0, movie: 1 } }).toArray(function(err, docs){
		assert.equal(err, null);

		console.log('Showing all Movie titles only')
		console.log(docs);
		callback(docs);
	});
};


module.exports = findDocuments;