// fetch 함수를 사용한 코드

console.log('Start!');

//  then 메소드 : promise 객체의 메소드 (fullfiled상태일떄 callback이 실행)
// 작업의 성공의 결과는 response이다.
fetch('https://www.naver.com/fallwarm')
  .then((response) => {
    console.log(response.status);
  })
  .then((result) => {
    console.log(reuslt);
  });

console.log('End');
