const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/i_Mhyke';

MongoClient.connect(url, (err, db) =>{
	 useUnifiedTopology: true
  if (err) throw err;
  let database = db.db("i_Mhyke");
  database.createCollection("interns", (err, res)=> {
    if (err) throw err;
    console.log("Interns collection created");
    db.close();
  });
});