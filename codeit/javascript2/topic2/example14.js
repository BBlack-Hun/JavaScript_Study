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
