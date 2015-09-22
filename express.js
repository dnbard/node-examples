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
    console.log('App listening to %s port', server.address().port);
});
