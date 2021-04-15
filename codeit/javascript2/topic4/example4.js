// POST request 보내기

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

// 직원을 추가
const newMember = {
  name: 'Jerry',
  email: 'jerry@codeitmall.kr',
  department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  // Stringify로 데이터를 변환시켜 줘야 한다.
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
  });
