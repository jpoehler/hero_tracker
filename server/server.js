var express = require('express');
var app = express();
var db = require('./modules/db.js');
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', (process.env.PORT || 4242));

app.get('/heroes', function(req, res){
  Heroes.find({}, function(err, data){
    if(err) {
      console.log(err);
    }
  });
});

app.post('/heroes', function(req, res){
  var addHero = new Hero({
    'alias' : req.body.alias,
    'first_name' : req.body.first_name,
    'last_name' : req.body.last_name,
    'city' : req.body.city,
    'power_name' : req.body.power_name
  });

  addHero.save(function(err, data){
    if(err){
      console.log(err);
    }

    res.send(data);
  });
});

app.get('/*', function(req, res){
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(app.get('port'), function(){
  console.log('Listening on port: ', app.get('port'));
});

module.exports = app;
