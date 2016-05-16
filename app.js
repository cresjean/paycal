'use strict';

var express = require('express');
var compress = require('compression');
var http = require('http');
var app = express();
var serverPort = 80;
app.use(express.static('public'));
app.use(compress());


app.listen(serverPort, function () {
  console.log('Example app listening on port %d!', serverPort);
});
