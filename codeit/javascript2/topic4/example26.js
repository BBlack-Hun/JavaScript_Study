// async 함수는 Promise객체를 리턴합니다.

// 이 함수는 프로미스객체와 3을 리턴
async function fetchAndPrint() {
  return 3;
}

async function fetchAndPrint() {
  return fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    response.text(),
  );
}

fetchAndPrint();
