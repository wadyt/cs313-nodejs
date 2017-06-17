var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    service = require('./service.js'),
    server = require('http').createServer(app);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
    extended: true
    }));

    service.attachService(app);
    server.listen(process.env.PORT || 5000);

    app.get('/', function(req, res){
        res.sendFile(__dirname + '/index.html');
    });
    console.log("server running at http://localhost:5000");