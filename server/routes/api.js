const express = require('express');
const router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";


// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = [
//     { name: 'John', address: 'Highway 71'},
//     { name: 'Peter', address: 'Lowstreet 4'},
//     { name: 'Amy', address: 'Apple st 652'},
//     { name: 'Hannah', address: 'Mountain 21'},
//     { name: 'Michael', address: 'Valley 345'},
//     { name: 'Sandy', address: 'Ocean blvd 2'},
//     { name: 'Betty', address: 'Green Grass 1'},
//     { name: 'Richard', address: 'Sky st 331'},
//     { name: 'Susan', address: 'One way 98'},
//     { name: 'Vicky', address: 'Yellow Garden 2'},
//     { name: 'Ben', address: 'Park Lane 38'},
//     { name: 'William', address: 'Central st 954'},
//     { name: 'Chuck', address: 'Main Road 989'},
//     { name: 'Viola', address: 'Sideway 1633'}
//   ];



//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });



// dbo.collection("customers").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     console.log(res);
//     db.close();
//   });

// dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });


// dbo.collection("customers").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });


// dbo.collection("customers").find({}, { _id: 0, name: 0 }).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });


// var query = { address: "Park Lane 38" };
// dbo.collection("customers").find(query).toArray(function(err, result) {
//   if (err) throw err;
//   console.log(result);
//   db.close();
// });

// var query = { address: "Park Lane 38" };
// dbo.collection("customers").deleteMany(query, function(err, obj) {
//   if (err) throw err;
//   console.log(obj.result.n + " document(s) deleted");
//   db.close();
// });


// var myquery = { address: "Valley 345" };
// var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
// dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });

// dbo.collection("customers").find().limit(5).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// Get users
router.get('/users', (req, res) => {
   MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find().toArray(function(erra, result) {
        if (erra) throw err;
        res.json(result); 
        db.close();
      });
    });

});

router.get('/details', (req, res) => {
    MongoClient.connect(url, function(err, db) {
   if (err) throw err;
   var dbo = db.db("mydb");
   dbo.collection("customers").find().sort({_id:-1}).toArray(function(erra, result) {
         if (erra) throw err;
         res.json(result); 
          console.log(result);
         db.close();
       });
     });
 
 });

 router.post('/addcustomer', (req, ress) => {
  MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("mydb");
 var myobj = { name: req.body.name, address: req.body.address };
 dbo.collection("customers").insertOne(myobj, function(err, res) {
  if (err) throw err;
   ress.json({ message: 'customer created!' });
  db.close();
});
   });

});

router.post('/addcustomerfone', (req, ress) => {
  MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("mydb");
 var myobj = { name: req.body.name, fone: req.body.fone };
 dbo.collection("customersfone").insertOne(myobj, function(err, res) {
  if (err) throw err;
   ress.json({ message: 'customerfon created!' });
  db.close();
});
   });

});


router.post('/addcustomerfoneedit', (req, ress) => {
  MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("mydb");
 var myobj = { name: req.body.name, fone: req.body.fone };
 dbo.collection("customersfone").update({'name': req.body.name},{$set:myobj},function(err, res) {
  if (err) throw err;
   ress.json({ message: `customer updated! ${ req.body.name}` });
  db.close();
 });

   });

});


router.get('/fonedetails', (req, res) => {
  MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("mydb");
 dbo.collection("customersfone").find().toArray(function(erra, result) {
       if (erra) throw err;
       res.json(result); 
       db.close();
     });
   });

});
router.get('/fonedetailsedit/:name', (req, res) => {
  MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("mydb");
 dbo.collection("customersfone").find({ "name" : req.params.name }).toArray(function(erra, result) {
       if (erra) throw err;
       res.json(result); 
       db.close();
     });
   });

});

router.all('/del/:id', (req, ress) => {
  MongoClient.connect(url, function(err, db) {
 if (err) throw err;
 var dbo = db.db("mydb");
    dbo.collection("customers").deleteOne( { "name" : req.params.id },function(err, res) {
      if (err) throw err;
       ress.json({ message: `customer deleted! ${ req.params.id}` });
      db.close();
     } );

   });


});

router.all('/login', (req, ress) => {
  const email = req.body.email,
       password = req.body.password;

       ress.send('sucess');






});

module.exports = router;