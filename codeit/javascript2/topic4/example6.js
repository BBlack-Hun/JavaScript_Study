// 새 직원 정보는 원하는 대로 작성하세요.
const newMember = {
  name: 'troll',
  email: 'troll@codeitmall.kr',
  department: 'troll',
};

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  body: JSON.stringify(newMember), // 이 부분을 채워보세요.
}).then(() => {
  fetch('https://learn.codeit.kr/api/members')
    .then((response) => response.text())
    .then((result) => {
      const members = JSON.parse(result);
      console.log(members[members.length - 1]);
    });
});
