
var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var client = mongodb.MongoClient;

var uri = "mongodb://mongo/WT";

router.get('/home/', function (req, res, next) {
    client.connect(uri, function (err, db) {
        if (err) return next(err);
        var collection = db.collection('posts');
        collection.find({ 'type': 'post' }, { '_id': 0 }).toArray(function (err, docs) {
            if (err) return next(err);
            return res.json(docs);
        });
    });
});



router.post('/insert', function (req, res, next) {
    var post = req.body;

    post['type'] = 'post';

    console.log(post);

    client.connect(uri, function (err, db) {
        if (err) return next(err);
        var collection = db.collection('posts');

        collection.insert(post, function (err, result) {
            if (err) return next(err);
            return res.json([]);

        });
    });

});




module.exports = router;