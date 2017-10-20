var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var client = mongodb.MongoClient;

var uri = "mongodb://mongo/WT";

router.get('/data1/from/db', function (req, res, next) {
    client.connect(uri, function (err, db) {
        if (err) return next(err);
        var collection = db.collection('dummy');
        collection.find({}).toArray(function (err, docs) {
            if (err) return next(err);
            return res.json(docs);
        });
    });
});





router.post("/checkLogin", function (req, res, next) {
    var name = req.body.username;
    var password = req.body.password;

    client.connect(uri, function (err, db) {
        if (err) return next(err);
        var collection = db.collection('dummy');
        collection.find({}, { "_id": 0 }).toArray(function (err, docs) {
            if (err) return next(err);
            return res.json(docs);
        });
    }); 
});

router.post('/data1/into/db', function (req, res, next) {
    client.connect(uri, function (err, db) {
        if (err) return next(err);
        var collection = db.collection('dummy');
        collection.insertMany(req.body, function (err, result) {
            return res.json({ result: "success" });
        });
    });
});

module.exports = router; 