// express 모듈로 하는 더 세련된 라우팅

const http = require('http');

const express = require('express');

const app = express();

users = ['Tom', 'Andy', 'Jessica', 'Paul', 'Codeit', 'Sally'];

// let server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('<h1>Hello World!</h1>');
//   } else if (req.url === '/users') {
//     res.end(`<h1>${users}</h1>`);
//   } else if (req.url.split('/')[1] === 'users') {
//     //url : /users/1, /users/2, ..
//     const userIdx = req.url.split('/')[2];
//     const userName = users[userIdx - 1];
//     res.end(`<h1>${userName}</h1>`);
//   } else {
//     res.end('<h1>Page Not Available</h1>');
//   }
// });

// server.listen(3000);

app.get('/', (req, res) => {
  res.end('<h1>Welcome!</h1>');
});

app.get('/users', (req, res) => {
  res.end(`<h1>${users}</h1>`);
});

app.get('/users/:id', (req, res) => {
  const userName = users[req.params.id - 1];
  res.end(`<h1>${userName}</h1>`);
  // console.log(req.params);
});

app.get('*', (req, res) => {
  res.end('<h1>Page Not Available</h1>');
});

app.listen(3000);
