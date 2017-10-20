var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var client = mongodb.MongoClient;

var uri = "mongodb://mongo/WT";



router.post('/users/insert', function (req, res, next) {

  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var password = req.body.password;
  var email = req.body.email;

  var post = [{
    'type': 'post',
    'firstname': firstname,
    'lastname': lastname,
    'email': email,
    'password': password
  }]

  client.connect(uri, function (err, db) {
    if (err) return next(err);
    var collection = db.collection('users');

    collection.insertMany(post, function (err, result) {
      collection.find({ 'type': 'posts' }).toArray(function (err, docs) {
        if (err) return next(err);
        return res.json(docs);
      });


    });
  });

});
router.get('/users/list', function (req, res, next) {
  client.connect(uri, function (err, db) {
    if (err) return next(err);
    var collection = db.collection('users');

    collection.insertMany(post, function (err, result) {
      collection.find({ 'type': 'posts' }).toArray(function (err, docs) {
        if (err) return next(err);
        return res.json(docs);
      });


    });
  });

});



module.exports = router;