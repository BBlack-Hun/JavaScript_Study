// async / await이란

// 원래 코드
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((reponse) => reponse.text())
//   .then((result) => {
//     console.log(result);
//   });

// 앞에 async를 없앨 경우 실행하면, 오류가 발생한다. await는 async가 있어야 한다는 뜻
async function fetchAndPrint() {
  console.log(2); // 실행 2
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(7); // 비동기 작업이 끝나 실행 7
  const result = await response.text(); // 실행 내용 출력
  console.log(result);
}

console.log(1);
fetchAndPrint();
console.log(3); // await가 걸려 있어 비동기 실행으로 함수 밖으로 나와서 3을 실행 3
console.log(4); // 실행 4
console.log(5); // 실행 5
console.log(6); // 실행 6
