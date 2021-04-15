// JSON 데이터를 객체로 변환하기
// fetch('https://www.google.com')
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    console.log(users.length);
    users.forEach((user) => {
      console.log(user.name);
    });
  });
