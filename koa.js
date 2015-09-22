var koa = require('koa');
var app = koa();
var port = 5999;

app.use(function* (next) {
    var start = new Date;
    //console.log('1 - first middleware start');

    yield next;

    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
    //console.log('5 - X-Response-Time header set');
});

app.use(function* (next) {
    var start = new Date;
    //console.log('2 - second middleware start');

    yield next;

    var ms = new Date - start;
    console.log('%s %s [%sms]', this.method, this.url, ms);
    //console.log('4 - %s %s [%sms]', this.method, this.url, ms);
});

app.use(function* () {
    //console.log('3 - response handler');
    this.body = 'Hello World';
});

app.listen(port);
console.log('App listening to %s port', port);
