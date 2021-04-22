// EventEmitter 객체 사용법

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// // 콜백을 호출
// myEmitter.emit('test');

// // 콜백 등록
// myEmitter.on('test', () => {
//   console.log('Success!');
// });

// 콜백이 등록되지 않았으므로, emit에서 test를 호출해도 출력되지 않는다.

// 누적 등록 된다 그리고 emit 했을때, 등록한 콜백대로 실행이 된다
// myEmitter.on('test', () => {
//   console.log('1');
// });

// myEmitter.on('test', () => {
//   console.log('2');
// });

// myEmitter.on('test', () => {
//   console.log('3');
// });

// myEmitter.emit('test');

const myEmitter2 = new EventEmitter();

myEmitter.on('test', () => {
  console.log('1');
});

myEmitter.on('test', () => {
  console.log('2');
});

myEmitter2.on('test', () => {
  console.log('3');
});

myEmitter.emit('test');
