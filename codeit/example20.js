// return 문
function square(x) {
    console.log('return 전');
    return x * x;
    console.log('return 후'); // Dead Code
}

console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');