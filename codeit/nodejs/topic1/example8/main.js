// 이상한 출력 순서

const fs = require('fs');

// 동기 실행
// console.log('Start!');

// let content = fs.readFileSync('./new', 'utf8');
// console.log(content);

// console.log('Finish!');

// 비동기 실행
console.log('Start!');

fs.readFile('./new', 'utf8', (error, data) => {
  console.log(data);
});

console.log('Finish!');
