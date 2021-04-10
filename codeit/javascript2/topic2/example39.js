// Map과 Set

const codeit = new Map();

codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

console.log(codeit.size);

codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size);

codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0

const members = new Set();

members.add('영훈');
members.add('윤수');
members.add('동욱');
members.add('태호');

console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

console.log(members.size); // 4

members.delete('종훈');
console.log(members.size);
members.delete('태호');
console.log(members.size);

members.clear();
console.log(members.size);

const members2 = new Set();
members2.add('영훈');
members2.add('윤수');
members2.add('동욱');
members2.add('태호');

for (const member of members2) {
  console.log(member);
}

const number = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(number);

console.log(uniqNumbers);
