// 조건 연산자 (Conditional operator)
const CUT_OFF = 80;

function paasChecker(score) {
  return score > CUT_OFF ? '합격' : '불합격';
}

console.log(paasChecker(75));
