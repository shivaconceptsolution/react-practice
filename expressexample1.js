var express = require('express');  
var app = express();  
app.get('/myget',function(req,res){
    res.send("Welcome in express framework")
})
app.post('/mypost',function(req,res){
    res.send("Welcome in express framework POST METHOD")
})
app.put('/myput',function(req,res){
    res.send("Welcome in express framework PUT METHOD")
})
app.delete('/mydel',function(req,res){
    res.send("Welcome in express framework Delete METHOD")
})
var server = app.listen(8000, function () {  
    var host = "127.0.0.1";  
    var port = server.address().port;  
    console.log('Example app listening at http://%s:%s', host, port);  
  }); 