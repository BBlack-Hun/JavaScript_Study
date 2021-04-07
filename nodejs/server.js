const express = require('express'); // 라이브러리 첨부
const app = express(); // 객체 생성

app.listen(8080, function () {
  console.log('listening on 8080');
}); //

// 누군가가 /pet 으로 방문을 하면..
// pet 관련된 안내문을 띄워주자!!

// app.get('경로', function (요청, 응답) {
//응답.send('반갑습니다.'); });
app.get('/pet', function (req, res) {
  res.send('펫 용품 쇼핑할 수 있는 페이지입니다.');
});

app.get('/beauty', function (req, res) {
  res.send('뷰티용품을 쇼핑 페이지임');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
