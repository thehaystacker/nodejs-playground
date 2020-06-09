const http = require('http');
const port = '8002';
const host = 'localhost'

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello haystacker \n');
}).listen(port, host);

console.log(`server running at http://${host}:${port}`);