// 비동기 프로그래밍가 이벤트

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// 콜백 등록
myEmitter.on('test', () => {
  console.log('Success!');
});

// 콜백을 호출
myEmitter.emit('test');
