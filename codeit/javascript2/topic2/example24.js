// try catch 문
// console.log('에러 전');

// const codeit = '코드잇';
// console.log(codeit);

// codeit = 'codeit';

// const language = 'JavaScript';
// console.log(language);

// console.log('에러 후')

try {
  // 코드
  console.log('에러 전');

  const codeit = '코드잇';
  console.log(codeit);

  codeit = 'codeit';
  // 에러 이후의 문장은 작동되지 않는다.
  const language = 'JavaScript';
  console.log(language);
} catch (e) {
  // 에러가 발생 했을 때의 구문
  console.log('에러 후');
  console.log(e);
  console.log(e.name);
  console.log(e.message);
}
