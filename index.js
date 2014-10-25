var app = require('./server/app');

var port = process.env.PORT || 9000;
app.listen(port, function(err){
  if(err){
    console.log(err.message);
  } else {
    console.log('listening on', port);
  }

});