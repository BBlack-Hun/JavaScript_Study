// class로 태그 선택하기
const myTags = document.getElementsByClassName('color-btn');
console.log(myTags);

// 각 인덱스의 접근
console.log(myTags[1]); // 대괄호 표기법
console.log(myTags.length); // 기억안남

for (let tag of myTags) {
  console.log(tag);
}

// 배열은 아니지만 배열처럼 쓰는 것... 유사 배열

// html은 깊이와 상관없이 위에서 부터 차례대로~
