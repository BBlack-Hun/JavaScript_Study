// 에러와 에러 객체
console.log('시작!');

const error = new TypeError('타입 에러가 발생하였습니다.');

throw error;

console.log(error.name);
console.log(error.message);

const title = '코드잇';
console.log(title);
console.log(codeit);
// error의 이름과 메시지를 담고 있는 에러 객체..!
// 1. reference error
// 2. 잘못된 함수 및 타입을 사용할 때 Type Error
// 3. 문법 오류인 syntax Error

console.log('끝!');
