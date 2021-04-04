// 값으로서 함수
const printJS = function () {
  console.log('JavaScript');
};

// console.log(0);
// console.dir('codeit');
// console.dir(true);
// console.dir(null);
// console.dir(undefined);
// console.dir({});
// console.dir([]);
// console.dir(printJS);

// 자바 스크립트의 함수는 어디에서나 호출될 수 있다.

printJS();

('----------------------------------');
// 객체에 담아 호출
const myObject = {
  brand: 'Codeit',
  bornYear: 2017,
  isVeryNice: true,
  sayHi: function (name) {
    console.log(`Hi! ${name}`);
  },
};

myObject.sayHi('JavaScript');

// 배열에 담아 호출
const myArray = [
  'codeit',
  2017,
  true,
  function (name) {
    console.log(`Hi! ${name}`);
  },
];

myArray[3]('Codeit');

// 돔 이벤트를 다룰땓, 함수를 파라미터로 전달 가능하다.
// function makeQuiz(quiz, answer, success, fail) {
//   if (prompt(quiz) === answer) {
//     console.log(success);
//   } else {
//     console.log(fail);
//   }
// }

// function getSuccess() {
//   return '정답';
// }

// function getFail() {
//   return '오답';
// }

// const question = '5 + 3 = ?';

// makeQuiz(question, '8', getSuccess, getFail);

// 고차함수
function getPrintHi() {
  return function () {
    console.log('Hi?');
  };
}

getPrintHi()();
