// PUT request와 DELETE request 보내기

// 전체 직원 조회
fetch('https://learn.codeit.kr/api/members')
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

// 3번 직원만 조회
fetch('https://learn.codeit.kr/api/members/3')
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

// 직원의 부서를 수정
const member = {
  name: 'Alice',
  email: 'alice@codeitmall.kr',
  department: 'marketing',
};

fetch('https://learn.codeit.kr/api/members/2', {
  method: 'PUT',
  // Stringify로 데이터를 String 타입으로 변환시켜 줘야 한다.
  body: JSONP.stringify(member),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

// 직원 정보를 삭제
fetch('https://learn.codeit.kr/api/members/2', {
  method: 'DELETE',
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });

// CORS 해결을 위한 헤더 찍어보기
// const headers = new Headers({
//   'Content-Type': 'text/xml',
// });

// fetch('https://learn.codeit.kr/api/members', {
//   headers,
// })
//   .then((response) => response.text())
//   .then((result) => {
//     console.log(result);
//   });
