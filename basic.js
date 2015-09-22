var http = require('http');

var server = http.createServer();
server.listen(5999);
console.log('Server listen to 5999 port');

server.on('request', function(req, res){
    console.log('%s - %s %s', new Date().toISOString(), req.method, req.url);

    res.write('Hello World!');
    res.end();
});
