//expressjs
var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

// node.js
// var http = require("http");
//
// var myServer = http.createServer(function(request, response)
// {
//     response.writeHead(200, {"Content-Type" : "text/html"});
//     response.write("<h1>Roux Meetups</h1>");
//     response.end();
// });
//
// myServer.listen(3000);
// console.log('Go to http://localhost:3000 on your browser');
