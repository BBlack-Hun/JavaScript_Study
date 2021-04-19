// catch 메소드는 마지막에 씁니다.

// catch가 중간에 있을 경우... 마지막 then 메소드에서 발생한 에러를 잡지 못한다.
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.text())
//   .catch((error) => {
//     console.log(error);
//   })
//   .then((result) => {
//     console.log(result);
//     throw new Error('test');
//   });

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())

  .then((result) => {
    console.log(result);
    throw new Error('test');
  })
  .catch((error) => {
    console.log(error);
  });
