const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/i_Mhyke';
const assert = require('assert');
const {createDocument, insertDocument} = require('./interns');
const findDocuments = require('./findinterns');
const {updateDocument, findUpdate} = require('./updateinterns');

mongo.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
 assert.equal(err, null);

console.log('Database created by i_Mhyke');
 		const db = client.db('i_Mhyke');

	createDocument(db, function(){});
	insertDocument(db, function(){ 
		findDocuments(db, function(){});
			updateDocument(db, function(){
				findUpdate(db, function(){
					client.close();
			});
		});
	});

});