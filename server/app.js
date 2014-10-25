var app = require('express')();

app.get('/*', function(req,res,next){
  console.log(req.url);

  if(req.url === '/' || req.url === '/angular'){
    next();
  } else {
    res.sendFile(req.url, {root:'./public'});
  }
});

app.get('/angular', function(req, res){
  res.sendFile('index.html', {root:'./public/angular'});
});
app.get('/', function(req, res){
  res.sendFile('index.html', {root:'./'});
});


module.exports = app;