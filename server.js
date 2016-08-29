"use strict";
var express = require('express');
var app = express();
var months = require('./months');
var jan = months[2];
console.log(mar);
app.get('/', (function (req, res) {
    res.send('Hello World');
}));
var server = app.listen(3000, (function () {
    var host = server.address().address;
    var port = server.address().port;
}));
