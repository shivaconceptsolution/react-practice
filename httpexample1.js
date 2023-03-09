const  http = require('http');

const port = 2000;
const host = "127.0.0.1"
const server = http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/html')
    res.end('<h1>Welcome in NODE JS </h1>')
})

server.listen(port,host,()=>{
    console.log(`click to execute http://${host}:${port}`)
})