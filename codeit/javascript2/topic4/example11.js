// Promise Channing이 필요한 경우

console.log('Start!');

// .then 메소드를 연속으로 사용하는 것
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.text())
//   .then((result) => {
//     const users = JSON.parse(result);
//     const user = users[0];
//     console.log(user);
//     const { address } = user;
//     console.log(address);
//     const { geo } = address;
//     console.log(geo);
//     const { lat } = geo;
//     console.log(lat);
//   });

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.text())
//   .then((result) => {
//     const users = JSON.parse(result);
//     const { id } = users[0];
//     fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//       .then((response) => response.text())
//       .then((posts) => {
//         console.log(posts);
//       });
//   });

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    const { id } = users[0];
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  })
  .then((response) => response.text())
  .then((posts) => {
    console.log(posts);
  });

console.log('End');
