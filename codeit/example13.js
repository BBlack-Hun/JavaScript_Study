// 템플릿 문자열 (templeate Strings)
// template: 일정한 틀, 형식

let year = 2018;
let month = 3;
let day = 11;

console.log('생년월일은 ' + year + '년 ' + month + '월 ' + day +'일 입니다');
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다`);

const myNumber = 3;

function getTwice(x) {
    return x * 2;
}

console.log(`${myNumber}의 두배는 ${getTwice(myNumber)} 입니다.`);