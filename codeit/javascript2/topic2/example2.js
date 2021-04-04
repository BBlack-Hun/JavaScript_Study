//  변수와 스코프
var title = 'Codeit';
console.log(title);

// 호이스팅 방지를 위해!
let age = 28;
// 값의 변화가 없을떄
const PI = 3.14;

var title = 'JavaScript';
console.log(title);

('----------------');

console.log(title);
var title = 'Codeit';
console.log(title);

// var 키워드는 중복 사용이 가능하지만, let은 중복사용이 불가능하다.

var title = 'Codeit';
console.log(title);
var title = 'JavaScript';
console.log(title);

('-------------------');
// 같은 변수를 사용하였기 때문에 오류 발생!
let title = 'Codeit';
let title = 'Javascript';

('----------------------');

var x = 3;

if (x < 4) {
  var y = 3;
}

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log('x: ', x);
console.log('y: ', y);

// let은 지역변수로만 스코프가 결정된다.

var x; // 함수 스코퓨ㅡ
let y; // 블록 스코프
const z; // 블록 스코프
