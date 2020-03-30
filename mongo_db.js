const http = require('http');
const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/i_Mhyke';



MongoClient.connect(url, function(err, db){
	if (err) throw err;
	console.log('Database created by i-Mhyke');
	db.close();
})