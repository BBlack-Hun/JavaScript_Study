// 함수를 만드는 방법
// function 함수이름(파라미터) {
//   동작
//   return 리턴값;
// }

// 함수 선언을 변수에 할당 가능!
// 함수 표현식
const printCodeit = function () {
  console.log('Codeit');
};

printCodeit();

// 함수 선언을 값처럼 사용함 : 함수 표현식
// 예)
const myBtn = document.querySelector('myBtn');

myBtn.addEventListener('click', function () {
  console.log('button is clicked');
});

// 함수 표현식과 함수 선언의 차이!
// 1. 함수 표현식은 호이스팅이 불가함
// 2. 스코프의 차이
