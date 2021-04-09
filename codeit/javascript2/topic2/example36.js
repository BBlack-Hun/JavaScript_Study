// reduces
const numbers = [1, 2, 3, 4];

// accumalator 누산기
// numbers.reduce((acc, el, i, arr) => {
//   return nextAccvalue;
// }, initialAccValue);

const sumAll = numbers.reduce((acc, el, i) => {
  console.log(`${i}번 index의 요소로 콜백함수가 동작중입니다.`);
  console.log(`acc:`, acc);
  console.log('el:', el);
  console.log('---------------------');

  return acc + el;
}, 0);

console.log('sumAll: ', sumAll);
