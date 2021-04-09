// Sort와 reverse

const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters);
console.log(numbers);

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers);

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers);

const letters2 = ['a', 'b', 'c'];
const numbers2 = [421, 721, 353];

letters2.reverse();
numbers2.reverse();

console.log(letters2);
console.log(numbers2);
