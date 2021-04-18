// rejected 상태가 되면 실행할 콜백

fetch('https://jsonplaceholder.typicode.com/users')
  .then(
    (response) => response.text(),
    (error) => {
      console.log(error);
    },
  )
  .then((result) => {
    console.log(result);
  });
