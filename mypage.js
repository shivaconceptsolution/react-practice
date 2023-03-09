var http = require('http');
var url = require('url');
var fs = require('fs');
const port = 2000;
const host = "127.0.0.1"
var s = http.createServer(function(req,res){
    var q = url.parse(req.url);
    var filename = "."+q.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<a href='./home.html'>Home</a>");
        res.write("<a href='./about.html'>About</a>");
        res.write(data);
        return res.end();
    });
});

s.listen(port,host,()=>{
    console.log(`click to execute http://${host}:${port}`)
})