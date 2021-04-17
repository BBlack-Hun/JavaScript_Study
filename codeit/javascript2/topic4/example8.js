// fetch 함수의 비동기 실행

console.log('Start!');

// fetch 함수의 then 메소드를 요청만 해놓고, callback이 오면 그때 반영을 한다.
fetch('https://www.naver.com/fallwarm')
  .then((response) => {
    console.log(response.status);
  })
  .then((result) => {
    console.log(reuslt);
  });

console.log('End');
