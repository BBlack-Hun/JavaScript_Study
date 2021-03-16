// Scope: 범위, 영역
//console.log(x);

let x = 3;  // 글로벌 변수, 전역 변수

function myFunction() { // 블록문
    let x = 5;  // 로컬 변수, 지역 변수
    console.log(x);
}

myFunction();
console.log(x);