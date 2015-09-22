var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://username:password@ds051553.mongolab.com:51553/backend-training';

MongoClient.connect(url, function (err, db) {
    if (err){
        return console.error(err);
    }

    console.log('Connected to database');

    var express = require('express');
    var app = express();

    app.use(function(req, res, next){
        console.log('%s - %s %s', new Date().toISOString(), req.method, req.url);
        next();
    });

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });

    var server = app.listen(5999, function () {
        console.log('Example app listening at %s port', server.address().port);
    });
});
