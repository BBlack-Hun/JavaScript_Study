const quiz = ['YUMMY', 'COUNT', 'ABUSE', 'SOUND', 'SWING'];

// 여기에 코드를 작성해 주세요.
const answer = quiz.map((qui, i, arr) => {
  console.log(arr);
  return qui[i];
});
// 테스트 코드
console.log(answer);
