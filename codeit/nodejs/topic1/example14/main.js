// 라우팅해보기

const http = require('http');

users = ['Tom', 'Andy', 'Jessica', 'Paul'];

let server = http.createServer((req, res) => {
  //   res.end('<h1>Hello World!</h1>');
  //   console.log(req.url);
  // 라우팅 별 출력되는 내용을 다르게 하기
  if (req.url === '/') {
    res.end('<h1>Hello World!</h1>');
  } else if (req.url === '/users') {
    res.end('<h1>' + users + '</h1>');
  } else {
    res.end('<h1>Page Not Available</h1>');
  }
});

server.listen(3000);
