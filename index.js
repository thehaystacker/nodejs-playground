// WRITING FIRST PROGRAM
// const http = require('http');
// const url = require('url');

// const port = '8002';
// const host = 'localhost';

// http.createServer(function (req, res) {
//   const parsedUrl = url.parse(req.url, true);

//   console.log('parsedUrl', parsedUrl);

//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello haystacker \n');
// }).listen(port, host);

// console.log(`server running at http://${host}:${port}`);

// THE FIBANOCCI SEQUENCE
const http = require("http");
const url = require("url");

const port = "8002";
const host = "localhost";

const fibonacciAsync = function (n, done) {
  if (n === 0) return 0;
  else if (n === 1 || n === 2) done(1);
  else if (n === 3) return 2;
  else {
    process.nextTick(function () {
      fibonacciAsync(n - 1, function (val1) {
        process.nextTick(function () {
          fibonacciAsync(n - 2, function (val2) {
            done(val1 + val2);
          });
        });
      });
    });
  }
};

http
  .createServer(function (req, res) {
    const urlP = url.parse(req.url, true);
    let fibo;
    res.writeHead(200, { "Content-Type": "text/plain" });
    if (urlP.query["n"]) {
      fibonacciAsync(parseInt(urlP.query["n"]), (fibo) => {
        res.end("Fibonacci " + urlP.query["n"] + "=" + fibo);
      });
    } else {
      res.end(
        "USAGE: http://127.0.0.1:8124?n=## where ## is the Fibonacci number desired"
      );
    }
  })
  .listen(port, host);

console.log(`server running at http://${host}:${port}`);
