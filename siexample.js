const  http = require('http');
const url = require('url');
const port = 2000;
const host = "127.0.0.1"
const server = http.createServer((req,res)=>{
    var q = url.parse(req.url,true)
    var obj = q.query
    var p = obj.txtp
    var r = obj.txtr
    var t = obj.txtt
    var si = (parseFloat(p)*parseFloat(r)*parseFloat(t))/100
    res.setHeader('Content-Type','text/html')
    res.end(`<h1>Result is ${si} </h1>`)
})

server.listen(port,host,()=>{
    console.log(`click to execute http://${host}:${port}`)
})