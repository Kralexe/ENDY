var express = require('express');
var app = express();
var path = require('path');
var public = __dirname;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'endy.html'));
});

app.post('/', function (req, res) {
    res.send(req.body);
});

app.use('/', express.static(public));

app.listen(8080);