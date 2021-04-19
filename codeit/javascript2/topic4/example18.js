// finally 메소드

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('exit');
  });

// 일부러 오류를 발생시키는 경우
fetch('https://jsonplaceholder.typicode.comm/users')
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
    throw new Error('from catch method');
  })
  .finally(() => {
    console.log('exit');
  });
