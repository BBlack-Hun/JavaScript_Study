// 옵셔널 체이닝 (Optional Chaining)

function printCatName(user) {
  console.log(user.cat.name);
}

const user1 = {
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'British Shorthair',
  },
};

printCatName(user1);

// const user2 = {
//   name: 'Young',
// };

// console.log(user2.cat);
// printCatName(user2);

function printCatName2(user) {
  console.log(user.cat && user.cat.name);
}

function printCatName3(user) {
  console.log(user.cat?.name); // 옵셔널 체이닝 연산자 왼편의 프로퍼티 값이 undefined 또는 null이 아니라면 그 다음 프로퍼티의 값을 리턴하고, 그렇지 않은 경우에는 undefined를 반환하는 문법
}

function printCatName4(user) {
  console.log(user.cat === null || user.cat === undefined ? undefined : user);
}

function printCatName5(user) {
  console.log(user.cat?.name ?? '함께 지내는 고양이가 없습니다');
}

const user3 = {
  name: 'Young',
};

printCatName5(user3);
