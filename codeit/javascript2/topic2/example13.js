// 조건 연산자 (Conditional operator)
if (조건) {
  // 조건이 true일 때 동작
} else {
  // 조건이 false일 때 동작
}

switch (값) {
  case A:
    // 값이 A와 일치할 때 동작
    break;
  default:
  // 값과 일치하는 case가 없을 때 동작
}

const CUT_OFF = 80;

function paasChecker(score) {
  return score > CUT_OFF ? '합격' : '불합격';
  if (score > CUT_OFF) {
    const msg = '합격';
    return msg;
  }
  for (let i = 0; i < 3; i++) {
    console.log(i);
  }
  return '불합격';
}

console.log(paasChecker(75));

console.log('----------------------------');

// 조건 ? truthy 할때 표현식 : falsy 할때 표현식
