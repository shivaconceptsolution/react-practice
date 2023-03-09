var url = require('url');
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
//  console.log(req.url)
   var q = url.parse(req.url, true);
    var obj = q.query
    var res1 = parseInt(obj.txtnum1) + parseInt(obj.txtnum2)
    res.write(""+res1)
    res.end("<h1>Hello World</h1>")
  })
  server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`)
    })