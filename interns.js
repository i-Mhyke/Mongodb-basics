const assert = require('assert');

const createDocument = function(db, callback) {
	db.createCollection('interns', (err, res)=>{
		if (err) throw err;
		console.log("Interns collection created")
	})
	db.createCollection('myMovies', (err, res)=>{
		if (err) throw err;
		console.log("myMovies collection created")
	})
	};

const insertDocument = function(db, callback){
	const moviesCollection = db.collection('myMovies');

	moviesCollection.insertMany([ 
		{movie: "The Banker", year: "2020", rating: 8},  
		{movie: "Bad Boys", year: "2020", rating: 7}, 
		{movie: "The Hunt", year: "2020", rating: 7}, 
		{movie: "Bloodshot", year: "2020", rating: 7.5}, 
		{movie: "First Cow", year: "2020", rating: 6.5} ],
		function(err, result){
			assert.equal(err, null);
			assert.equal(5, result.result.n);
			assert.equal(5, result.ops.length);

			console.log(result);
			callback(result);
		});
	}
exports.createDocument = createDocument;
exports.insertDocument = insertDocument;
