// Spread 구문 (Spread Syntax)
const numbers = [1, 2, 3];

console.log(...numbers);

// rest parameter와 사용례가 비슷하다
const sumAll = (...args) => {
  let sum = 0;
  for (arg of args) {
    sum += arg;
  }

  return sum;
};

console.log(sumAll(1, 2, 3, 4));

const WebPublishing = ['HTML', 'CSS'];
// const interactiveWeb = WebPublishing.slice();
const interactiveWeb = [...WebPublishing, 'JavaScript'];

// interactiveWeb.push('JavaScript');

console.log(WebPublishing);
console.log(interactiveWeb);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const arr4 = arr1.concat(arr2);
console.log(arr4);

// Arguments로도 활용가능!
const introduce = (name, birth, job) => {
  console.log('안녕하세요! 반갑습니다.');
  console.log(`저는 ${name}입니다.`);
  console.log(`${birth}년 생이고,`);
  console.log(`직업은 ${job}입니다.`);
  console.log('잘 부탁드립니다 :');
};

const myArr = ['코드잇', 2017, '프로그래밍 강사'];
introduce(...myArr);

// const numbers = [1];

// const numer ...numbers;

const member = ['태호', '종훈', '우재'];

const newObject = { ...member };

console.log(newObject);
