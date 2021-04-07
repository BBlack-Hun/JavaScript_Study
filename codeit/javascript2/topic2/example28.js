// forEach와 map
const members = ['영훈', '윤수', '동욱', '태호'];
for (let member of members) {
  console.log(`${member}님이 입장하셨습니다.`);
}

// function 표기 및 arrow Funciton으로도 작성 가능
members.forEach((member) => {
  console.log(`${member}님이 입장하셨습니다.`);
});

members.forEach((member, i) => {
  console.log(`${i} ${member}님이 입장하셨습니다`);
});

const firstNames = ['영훈', '윤수', '동욱', '태호'];
const lastNames = ['강', '이', '손', '성'];

firstNames.forEach((firstName, i) => {
  console.log(`${lastNames[i]}${firstName}님이 입장하셨습니다.`);
});

firstNames.forEach((firstName, i, arr) => {
  console.log(`${lastNames[i]}${firstName}님이 입장하셨습니다.`);
  console.log(arr); // 잘 사용되지 않음
});

['영훈', '윤수', '동욱', '태호'].forEach((firstName, i, arr) => {
  console.log(`${lastNames[i]}${firstName}님이 입장하셨습니다.`);
  console.log(arr); // 잘 사용되지 않음
});
// map을 사용해도 동일하게 동작함
['영훈', '윤수', '동욱', '태호'].map((firstName, i, arr) => {
  console.log(`${lastNames[i]} ${firstName}님이 입장하셨습니다.`);
  console.log(arr); // 잘 사용되지 않음
});
const fullNames = firstNames.map((firstName, i, arr) => {
  return lastNames[i] + firstName;
});

console.log(fullNames);

const fullName2 = firstNames.map((firstName, i) => lastNames[i] + firstName);

console.log(fullName2);

// 배열의 반복잡업이 필요한 경우 Foreach / 반복작업을 통해 새로운 배열을 만들 때 map

const members2 = ['영훈', ' 윤수', '동욱', '태호'];

// 배열에 인자가 추가된다고 무한루프에 빠지지 않으며 / 배열이 줄어들 경우, 반복하는 횟수가 준다.
members2.forEach((member) => {
  console.log(`${member}님이 입장하셨습니다.`);
  members2.push('코드잇');
});

console.log(members2);
