const http = require('http');

let server = http.createServer((req, res) => {
  res.end('<h1>Hello World!</h1>');
});
server.listen(3000);
