// 상수

const pi = 3.14;
let radius = 0;

// 원의 넓이를 계산하는 함수
function calculateArea() {
    return pi * radius * radius;
}

// 반지름에 따른 원의 넓이를 출력하는 함수
function printArea() {
    return `반지름이 ${radius}일떄 ,원의 넓이는 ${calculateArea()}`;
}

radius = 4;
console.log(printArea());