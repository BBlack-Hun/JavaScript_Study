// 이벤트에 추가정보 함께 전달하기

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// myEmitter.on('test', (arg1, arg2, arg3, arg4) => {
//   console.log(arg1);
//   console.log(arg2);
//   console.log(arg3);
//   console.log(arg4);
// });
// 인자의 갯수를 여러개를 보낼 수도 있고, 등록한 콜백에 인자가 존재하지 않을 경우, undefined라고 출력된다
// myEmitter.emit('test', 'apple', 'banana', 'pear');

const obj = { type: 'text', data: 'Hello CodeIt', date: '2020-09-01' };

myEmitter.on('test', (info) => {
  console.log(info);
});

// 객체도 인자로 넣을 수 있다.
myEmitter.emit('test', obj);
