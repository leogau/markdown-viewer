var express = require('express');
var app = express();

// set view engine
app.set('view engine', 'ejs');

// set public folder location
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('pad');
});

app.get('/(:id)', function(req, res) {
  res.render('pad');
})

var sharejs = require('share');
require('redis');

var shareOptions = {
  db: {type: 'redis'}
};

sharejs.server.attach(app, shareOptions);

var port = process.env.PORT || 8000;
app.listen(port);
console.log("Server started on port " + port);
