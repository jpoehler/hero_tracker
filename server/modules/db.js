var mongoose = require('mongoose');

var mongoURI = 'mongodb://localhost/heroes_db';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('Mongo Connection Error: ', err);
});

MongoDB.once('open', function(){
  console.log('Mongo Connection Open');
});

module.exports = MongoDB;
