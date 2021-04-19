// async / await이란

// 원래 코드
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((reponse) => reponse.text())
//   .then((result) => {
//     console.log(result);
//   });

async function fetchAndPrint() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await response.text();
  console.log(result);
}

fetchAndPrint();
