
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = new express();
var route = require('./router/route');
var mongodb = require('./config/mongoConfig');
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');
 
//var expressValidator = require('express-validator');
mongoose.connect(mongodb.url);

app.use(bodyParser.json(limit= '20mb'));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
//app.use(expressValidator());
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', route);


app.use('/api/v1', route);
var server = app.listen(8002, function(){
     console.log('Express server listening port'+server.address().port);   
})

module.exports = app;